<x-mail::message>
# Lead Overzicht

Periode: **{{ $periodStart->format('d-m-Y') }}** tot **{{ $periodEnd->format('d-m-Y') }}**

---

## Samenvatting

**Totaal aantal leads:** {{ $totalLeads }}

---

@if(count($originBreakdown) > 0)
### Gevonden via

| Bron | Aantal |
|------|--------|
@foreach($originBreakdown as $origin => $count)
| {{ $origin }} | {{ $count }} |
@endforeach
@endif

---

@if(count($locationBreakdown) > 0)
### Voorkeurslocatie

| Locatie | Aantal |
|---------|--------|
@foreach($locationBreakdown as $location => $count)
| {{ $location }} | {{ $count }} |
@endforeach
@endif

---

@if($totalLeads > 0)
## Alle Leads

@foreach($leads as $lead)
### {{ $lead->properties['name'] ?? 'Onbekend' }}

- **E-mail:** {{ $lead->properties['email'] ?? '-' }}
- **Telefoon:** {{ $lead->properties['phone'] ?? '-' }}
- **Locatie:** {{ ucfirst($lead->properties['location'] ?? '-') }}
- **Gevonden via:** {{ $lead->properties['origin'] ?? '-' }}
- **Datum:** {{ $lead->created_at->format('d-m-Y H:i') }}

@if(!empty($lead->properties['message']))
> {{ $lead->properties['message'] }}
@endif

---

@endforeach
@else
*Geen leads in deze periode.*
@endif

Met vriendelijke groet,<br>
{{ config('app.name') }} Website
</x-mail::message>
