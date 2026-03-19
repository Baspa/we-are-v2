<?php

namespace App\Mail;

use Carbon\CarbonInterface;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Spatie\Activitylog\Models\Activity;

class LeadOverview extends Mailable
{
    use Queueable, SerializesModels;

    public Collection $leads;

    public array $originBreakdown;

    public array $locationBreakdown;

    public CarbonInterface $periodStart;

    public CarbonInterface $periodEnd;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public string $period = 'month'
    ) {
        $this->periodEnd = now();
        $this->periodStart = match ($period) {
            'week' => now()->subWeek(),
            'month' => now()->subMonth(),
            'year' => now()->subYear(),
            default => now()->subMonth(),
        };

        $this->leads = Activity::query()
            ->where('event', 'contact_form_submitted')
            ->whereBetween('created_at', [$this->periodStart, $this->periodEnd])
            ->orderBy('created_at', 'desc')
            ->get();

        $this->originBreakdown = $this->leads
            ->groupBy(fn ($lead) => $lead->properties['origin'] ?? 'Onbekend')
            ->map->count()
            ->sortDesc()
            ->toArray();

        $this->locationBreakdown = $this->leads
            ->groupBy(fn ($lead) => ucfirst($lead->properties['location'] ?? 'Onbekend'))
            ->map->count()
            ->sortDesc()
            ->toArray();
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $periodLabel = match ($this->period) {
            'week' => 'Wekelijks',
            'month' => 'Maandelijks',
            'year' => 'Jaarlijks',
            default => 'Maandelijks',
        };

        return new Envelope(
            from: new Address('info@we-are.club', 'WE ARE Personal Training'),
            subject: "{$periodLabel} Lead Overzicht - {$this->leads->count()} leads",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.lead-overview',
            with: [
                'leads' => $this->leads,
                'totalLeads' => $this->leads->count(),
                'originBreakdown' => $this->originBreakdown,
                'locationBreakdown' => $this->locationBreakdown,
                'periodStart' => $this->periodStart,
                'periodEnd' => $this->periodEnd,
                'period' => $this->period,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
