<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EbookController extends Controller
{
    /**
     * Mailing list ID for ebook downloads (leadmagnet).
     */
    private const MAILING_LIST_EBOOK = 3;

    public function download(Request $request)
    {
        $validated = $request->validate([
            'naam' => 'required|string|max:255',
            'achternaam' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        $fullName = $validated['naam'].' '.$validated['achternaam'];

        try {
            if (! DB::connection('crm')->getDatabaseName()) {
                throw new Exception('Unable to connect to CRM database');
            }

            // Check if customer already exists by email
            $existingCustomer = DB::connection('crm')->table('customers')
                ->where('email', $validated['email'])
                ->first();

            if ($existingCustomer) {
                $customerId = $existingCustomer->id;

                // Update the customer name
                DB::connection('crm')->table('customers')
                    ->where('id', $customerId)
                    ->update([
                        'name' => $fullName,
                        'updated_at' => now(),
                    ]);
            } else {
                // Insert new customer
                $customerId = DB::connection('crm')->table('customers')->insertGetId([
                    'name' => $fullName,
                    'email' => $validated['email'],
                    'is_created_via_website' => true,
                    'is_notified_via_email' => false,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            // Check if customer is already in the ebook mailing list
            $existingMailingListEntry = DB::connection('crm')->table('customer_mailing_list')
                ->where('customer_id', $customerId)
                ->where('mailing_list_id', self::MAILING_LIST_EBOOK)
                ->first();

            // Only insert if not already in the mailing list
            if (! $existingMailingListEntry) {
                DB::connection('crm')->table('customer_mailing_list')->insert([
                    'customer_id' => $customerId,
                    'mailing_list_id' => self::MAILING_LIST_EBOOK,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        } catch (Exception $e) {
            Log::error('CRM Database connection failed: '.$e->getMessage());

            // Still allow download even if CRM fails
        }

        return response()->json([
            'success' => true,
            'download_url' => '/downloads/ebook-succesvol-afvallen.pdf',
        ]);
    }
}
