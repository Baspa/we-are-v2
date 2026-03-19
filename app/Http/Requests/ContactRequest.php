<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'digits:10'],
            'location' => ['required', 'in:uden,schijndel'],
            'origin' => ['required', 'in:Instagram / Facebook,Google,Via-via,Overig'],
            'message' => ['required', 'string', 'max:1000'],
        ];
    }

    /**
     * Get the custom validation messages for the request.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Vul alsjeblieft uw naam in',
            'name.max' => 'Uw naam mag maximaal 100 tekens bevatten',
            'email.required' => 'Vul alsjeblieft uw e-mailadres in',
            'email.email' => 'Vul alsjeblieft een geldig e-mailadres in',
            'phone.required' => 'Vul alsjeblieft uw telefoonnummer in',
            'phone.digits' => 'Een telefoonnummer mag alleen uit 10 cijfers bestaan',
            'location.required' => 'Kies alsjeblieft een locatie',
            'location.in' => 'Kies een geldige locatie (Uden of Schijndel)',
            'origin.required' => 'Geef alsjeblieft aan hoe je ons hebt gevonden',
            'origin.in' => 'Kies een geldige optie',
            'message.required' => 'Vul alsjeblieft een bericht in',
            'message.max' => 'Uw bericht mag maximaal 1000 tekens bevatten',
        ];
    }
}
