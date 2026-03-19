<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Activitylog\Facades\Activity;

class ContactController extends Controller
{
    /**
     * Store a contact form submission.
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        // Log the contact submission
        Activity::withProperties($validated)
            ->event('contact_form_submitted')
            ->log("Contact form submitted by {$validated['name']} ({$validated['email']})");

        // Send the email with retry logic
        try {
            retry(3, function () use ($validated) {
                Mail::to(config('mail.contact_recipient', 'brayen@we-are.club'))
                    ->send(new Contact($validated));
            }, 500);
        } catch (\Exception $e) {
            Log::error('Failed to send contact email', [
                'error' => $e->getMessage(),
                'data' => $validated,
            ]);

            // Optionally send Discord alert here if configured
            // DiscordAlert::message("Contact form email failed: {$e->getMessage()}")->send();

            return back()->withErrors(['email' => 'Er is iets misgegaan bij het versturen. Probeer het later opnieuw of neem telefonisch contact met ons op.']);
        }

        return redirect()->route('contact.thanks');
    }

    /**
     * Display the thank you page.
     */
    public function thanks(): Response
    {
        return Inertia::render('Contact/Thanks');
    }
}
