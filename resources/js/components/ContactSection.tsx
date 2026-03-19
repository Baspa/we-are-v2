import { useEffect, useRef, useState } from 'react'
import { useForm } from '@inertiajs/react'
import { Send, Clock, Phone, Mail, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    const { data, setData, post, processing, wasSuccessful, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        location: '',
        origin: '',
        message: '',
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/contact', {
            preserveScroll: true,
        })
    }

    return (
        <section ref={sectionRef} id="contact" className="bg-background py-20 md:py-32">
            <div className="container px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className={`transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Neem Contact Op</p>
                        <h2 className="section-title mb-6">
                            Personal Training Uden & Schijndel — <span className="text-primary">Laten We Kennismaken!</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                            Een klik kan het begin zijn van jouw transformatie. We zijn benieuwd naar wie je bent en waar we je mee kunnen helpen. Plan nu je
                            gratis en vrijblijvende kennismaking!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Telefoon</p>
                                    <a href="tel:+31636123542" className="font-semibold text-foreground transition-colors hover:text-primary">
                                        +31 6 36 12 35 42
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">E-mail</p>
                                    <a href="mailto:info@we-are.club" className="font-semibold text-foreground transition-colors hover:text-primary">
                                        info@we-are.club
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Reactietijd</p>
                                    <p className="font-semibold text-foreground">Binnen 24 uur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`transition-all delay-200 duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <div className="rounded-2xl border border-border bg-card p-8">
                            {wasSuccessful ? (
                                <div className="py-12 text-center">
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-4 font-display text-3xl">Bedankt!</h3>
                                    <p className="text-muted-foreground">We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op. Tot snel!</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="mb-6 font-display text-2xl">Plan Je Gratis Kennismaking</h3>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                                Volledige naam *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                                maxLength={100}
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                                placeholder="Jouw naam"
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                                E-mailadres *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                required
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                                placeholder="jouw@email.nl"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                                                Telefoonnummer *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                required
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                                placeholder="0612345678"
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="location" className="mb-2 block text-sm font-medium text-foreground">
                                                Voorkeurslocatie *
                                            </label>
                                            <select
                                                id="location"
                                                value={data.location}
                                                onChange={(e) => setData('location', e.target.value)}
                                                required
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                            >
                                                <option value="">Kies een locatie</option>
                                                <option value="uden">Uden</option>
                                                <option value="schijndel">Schijndel</option>
                                            </select>
                                            {errors.location && <p className="mt-1 text-sm text-destructive">{errors.location}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="origin" className="mb-2 block text-sm font-medium text-foreground">
                                                Hoe heb je ons gevonden? *
                                            </label>
                                            <select
                                                id="origin"
                                                value={data.origin}
                                                onChange={(e) => setData('origin', e.target.value)}
                                                required
                                                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                            >
                                                <option value="">Kies een optie</option>
                                                <option value="Instagram / Facebook">Instagram / Facebook</option>
                                                <option value="Google">Google</option>
                                                <option value="Via-via">Via-via</option>
                                                <option value="Overig">Overig</option>
                                            </select>
                                            {errors.origin && <p className="mt-1 text-sm text-destructive">{errors.origin}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                                                Wat is jouw doel? *
                                            </label>
                                            <textarea
                                                id="message"
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                required
                                                rows={3}
                                                maxLength={1000}
                                                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary"
                                                placeholder="Vertel ons wat je wilt bereiken..."
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
