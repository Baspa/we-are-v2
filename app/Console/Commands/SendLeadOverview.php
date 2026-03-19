<?php

namespace App\Console\Commands;

use App\Mail\LeadOverview;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

#[Signature('send:lead-overview {--period=month : The period to report on (week, month, year)}')]
#[Description('Send a lead overview email with contact form submissions')]
class SendLeadOverview extends Command
{
    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $period = $this->option('period');

        if (! in_array($period, ['week', 'month', 'year'])) {
            $this->error("Invalid period: {$period}. Use week, month, or year.");

            return self::FAILURE;
        }

        $mailable = new LeadOverview($period);

        $recipient = config('mail.contact_recipient', 'brayen@we-are.club');

        $this->info("Sending lead overview for period: {$period}");
        $this->info("Total leads found: {$mailable->leads->count()}");

        Mail::to($recipient)->send($mailable);

        $this->info("Lead overview sent to {$recipient}");

        return self::SUCCESS;
    }
}
