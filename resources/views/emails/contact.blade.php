<x-mail::message>
# Nieuw contactformulier

Er is een nieuw contactformulier ingevuld op de website.

---

### Contactgegevens

**Naam:** {{ $name }}

**E-mailadres:** {{ $email }}

**Telefoonnummer:** {{ $phone }}

---

### Details

**Voorkeurslocatie:** {{ $location }}

**Gevonden via:** {{ $origin }}

---

### Bericht

{{ $message }}

---

<x-mail::button :url="'tel:' . $phone">
Bel {{ $name }}
</x-mail::button>

Met vriendelijke groet,<br>
{{ config('app.name') }} Website
</x-mail::message>
