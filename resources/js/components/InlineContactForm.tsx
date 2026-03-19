import { useForm } from '@inertiajs/react'
import { Send } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface ContactFormData {
    name: string
    email: string
    phone: string
    location: string
    origin: string
    message: string
}

export default function InlineContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        location: '',
        origin: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        })
    }

    return (
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-2xl font-semibold">Plan Je Gratis Kennismaking</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <Label htmlFor="inline-name">Volledige naam *</Label>
                    <Input
                        id="inline-name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Jouw naam"
                        className="mt-2"
                    />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>

                <div>
                    <Label htmlFor="inline-email">E-mailadres *</Label>
                    <Input
                        id="inline-email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="jouw@email.nl"
                        className="mt-2"
                    />
                    {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>

                <div>
                    <Label htmlFor="inline-phone">Telefoonnummer *</Label>
                    <Input
                        id="inline-phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        placeholder="0612345678"
                        className="mt-2"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div>
                    <Label htmlFor="inline-location">Voorkeurslocatie *</Label>
                    <Select value={data.location} onValueChange={(value) => setData('location', value)}>
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Kies een locatie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uden">Uden</SelectItem>
                            <SelectItem value="schijndel">Schijndel</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.location && <p className="mt-1 text-sm text-destructive">{errors.location}</p>}
                </div>

                <div>
                    <Label htmlFor="inline-origin">Hoe heb je ons gevonden? *</Label>
                    <Select value={data.origin} onValueChange={(value) => setData('origin', value)}>
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Selecteer een optie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Instagram / Facebook">Instagram / Facebook</SelectItem>
                            <SelectItem value="Google">Google</SelectItem>
                            <SelectItem value="Via-via">Via-via</SelectItem>
                            <SelectItem value="Overig">Overig</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.origin && <p className="mt-1 text-sm text-destructive">{errors.origin}</p>}
                </div>

                <div>
                    <Label htmlFor="inline-message">Wat is jouw doel? *</Label>
                    <Textarea
                        id="inline-message"
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        placeholder="Vertel ons wat je wilt bereiken..."
                        rows={3}
                        className="mt-2 resize-none"
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="btn-hero flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {processing ? (
                        <span>Verzenden...</span>
                    ) : (
                        <>
                            <span>Verstuur Aanvraag</span>
                            <Send className="h-5 w-5" />
                        </>
                    )}
                </button>
            </form>
            <p className="mt-4 text-center text-xs text-muted-foreground">100% vrijblijvend - Geen verplichtingen</p>
        </div>
    )
}
