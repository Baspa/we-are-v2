import { Head } from '@inertiajs/react'
import { Download, CheckCircle, XCircle, Star, Users, Clock, ArrowRight, Award, Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ebookAuthor from '@/assets/ebook-author.webp'
import ebookCover from '@/assets/ebook-cover.webp'
import ebookFront from '@/assets/ebook-front.webp'
import ebookInside from '@/assets/ebook-inside.webp'
import ebookDiary from '@/assets/ebook-diary.webp'
import ebookDumbbell from '@/assets/ebook-dumbbell.webp'
import MainLayout from '@/layouts/MainLayout'

const useScrollReveal = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
}

export default function GratisDownload() {
    const [naam, setNaam] = useState('')
    const [achternaam, setAchternaam] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const hero = useScrollReveal()
    const video = useScrollReveal()
    const probleem = useScrollReveal()
    const pijn = useScrollReveal()
    const shift = useScrollReveal()
    const krijgen = useScrollReveal()
    const fomo = useScrollReveal()
    const author = useScrollReveal()
    const form = useScrollReveal()

    const handleDownload = (e: React.FormEvent) => {
        e.preventDefault()
        if (!naam || !achternaam || !email) return

        const subject = encodeURIComponent('E-book download aanvraag')
        const body = encodeURIComponent(
            `Naam: ${naam} ${achternaam}\nE-mail: ${email}\n\nIk wil graag het gratis e-book 'Succesvol Afvallen zonder Voedingsschema' ontvangen.`
        )
        window.location.href = `mailto:brayen@we-are.club?subject=${subject}&body=${body}`
        setSubmitted(true)
    }

    const scrollToForm = () => {
        document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <MainLayout showStickyCTA={false}>
            <Head title="Gratis E-book Succesvol Afvallen | WE ARE Personal Training">
                <meta
                    name="description"
                    content="Download gratis het e-book 'Succesvol Afvallen zonder Voedingsschema' van Thierry van Melis. Ontdek waarom diëten niet werken en hoe je wél blijvend afvalt."
                />
                <meta
                    name="keywords"
                    content="Gratis e-book afvallen, succesvol afvallen, afvallen zonder dieet, mindset afvallen, Personal Training Uden"
                />
                <meta property="og:title" content="Gratis E-book Succesvol Afvallen | WE ARE Personal Training" />
                <meta
                    property="og:description"
                    content="Download gratis het e-book 'Succesvol Afvallen zonder Voedingsschema'. Ontdek waarom diëten niet werken."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/gratis-download" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/gratis-download" />
            </Head>

            {/* HERO */}
            <section className="relative overflow-hidden bg-background pb-16 pt-24 md:pb-24 md:pt-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
                <div ref={hero.ref} className="container relative z-10 mx-auto px-4">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div
                            className={`transition-all duration-700 ${hero.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                                <Star className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">100% Gratis — Geen verplichtingen</span>
                            </div>

                            <h1 className="section-title mb-6">
                                Stop met diëten die <span className="text-primary">niet werken.</span>
                            </h1>

                            <p className="mb-4 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                                Ontdek waarom jij nog niet afvalt — en hoe je het <strong className="text-foreground">wél</strong> voor
                                elkaar krijgt.
                            </p>

                            <p className="mb-8 text-lg text-muted-foreground">
                                Download gratis het e-book dat je mindset verandert — en eindelijk zorgt voor{' '}
                                <strong className="text-foreground">blijvend resultaat zonder voedingsschema</strong>.
                            </p>

                            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                                <button onClick={scrollToForm} className="btn-hero inline-flex items-center gap-2">
                                    Download gratis e-book <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="font-semibold">Al +2.500 mensen gingen je voor</span>
                            </div>
                        </div>

                        <div
                            className={`relative transition-all delay-300 duration-700 ${hero.isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                        >
                            <div className="relative mx-auto max-w-md">
                                <img
                                    src={ebookCover}
                                    alt="E-book Succesvol Afvallen zonder Voedingsschema"
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg">
                                    GRATIS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO */}
            <section className="bg-muted/30 py-16">
                <div ref={video.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-3xl text-center transition-all duration-700 ${video.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <h2 className="section-title mb-8">
                            Bekijk de <span className="text-primary">aankondiging</span>
                        </h2>
                        <div className="overflow-hidden rounded-lg border border-border shadow-xl">
                            <video controls className="aspect-video w-full" poster={ebookFront}>
                                <source src="/videos/ebook-promo.mp4" type="video/mp4" />
                                Je browser ondersteunt geen video.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEEM */}
            <section className="py-16 md:py-24">
                <div ref={probleem.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-3xl transition-all duration-700 ${probleem.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <h2 className="section-title mb-8 text-center">Je weet eigenlijk precies wat je moet doen…</h2>

                        <div className="mb-8 space-y-4">
                            {['Minder eten', 'Gezonder leven', 'Meer bewegen'].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-lg text-muted-foreground">
                                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="mb-4 text-2xl font-bold">Maar toch lukt het niet.</p>
                            <p className="mb-2 text-xl text-muted-foreground">Waarom?</p>
                            <p className="text-xl font-semibold text-primary">Omdat het probleem niet je voeding is…</p>
                            <p className="mt-2 text-2xl font-extrabold">Het probleem zit in je hoofd.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PIJN + EMOTIE */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div ref={pijn.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-3xl transition-all duration-700 ${pijn.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <h2 className="section-title mb-10 text-center">Misschien herken je dit…</h2>

                        <div className="mb-10 grid gap-4 sm:grid-cols-2">
                            {[
                                'Je vermijdt situaties omdat je je niet goed voelt in je lichaam',
                                'Je begint wéér opnieuw… maar haakt na een paar weken af',
                                'Je vergelijkt jezelf constant met anderen',
                                'Je mist zelfvertrouwen — ook buiten afvallen om',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-background p-5">
                                    <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-destructive" />
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="mb-2 text-xl text-muted-foreground">En diep vanbinnen weet je:</p>
                            <p className="text-2xl font-extrabold italic text-primary md:text-3xl">"Zo wil ik niet verder."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DE SHIFT */}
            <section className="py-16 md:py-24">
                <div ref={shift.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-3xl transition-all duration-700 ${shift.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <h2 className="section-title mb-4 text-center">Wat niemand je vertelt</h2>

                        <div className="mb-10 text-center">
                            <p className="mb-1 text-xl font-semibold">Afvallen is niet moeilijk.</p>
                            <p className="text-xl font-extrabold text-primary">Maar veranderen als persoon wél.</p>
                        </div>

                        <div className="mb-10 grid gap-8 md:grid-cols-2">
                            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-6">
                                <h3 className="mb-4 text-lg font-bold text-destructive">De meeste mensen zoeken:</h3>
                                <ul className="space-y-3">
                                    {['Een schema', 'Een dieet', 'Een quick fix'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                                            <XCircle className="h-5 w-5 text-destructive" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                                <h3 className="mb-4 text-lg font-bold text-primary">Maar wat ze nodig hebben:</h3>
                                <ul className="space-y-3">
                                    {['Een andere mindset', 'Meer zelfwaarde', 'Controle over hun gedrag'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-foreground">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="text-center text-xl font-bold">Precies dát leer je in dit boek.</p>
                    </div>
                </div>
            </section>

            {/* WAT ZE KRIJGEN */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div ref={krijgen.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-4xl transition-all duration-700 ${krijgen.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <h2 className="section-title mb-10 text-center">
                            In dit gratis e-book <span className="text-primary">ontdek je:</span>
                        </h2>

                        <div className="grid items-center gap-10 md:grid-cols-2">
                            <div className="space-y-5">
                                {[
                                    'Waarom je steeds terugvalt (en hoe je dat stopt)',
                                    'Hoe je afvalt zonder streng voedingsschema',
                                    'De grootste fouten die 99% maakt',
                                    'Hoe je eindelijk consistent wordt',
                                    'Hoe je je zelfvertrouwen terugkrijgt',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                                        <p className="text-lg">{item}</p>
                                    </div>
                                ))}

                                <div className="border-t border-border pt-4">
                                    <p className="text-lg text-muted-foreground">
                                        En misschien nog belangrijker:{' '}
                                        <strong className="text-foreground">
                                            Hoe je weer plezier krijgt in je leven — de "jus" terug.
                                        </strong>
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <img src={ebookInside} alt="E-book inhoud" className="w-full rounded-lg shadow-lg" loading="lazy" />
                                <img src={ebookDiary} alt="Short Diary werkboek" className="w-full rounded-lg shadow-lg" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOMO / URGENTIE */}
            <section className="py-16 md:py-24">
                <div ref={fomo.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-3xl text-center transition-all duration-700 ${fomo.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-2">
                            <Clock className="h-4 w-4 text-destructive" />
                            <span className="text-sm font-semibold text-destructive">Beperkt gratis beschikbaar</span>
                        </div>

                        <h2 className="section-title mb-6">Dit is geen standaard dieetboek.</h2>

                        <p className="mb-4 text-xl text-muted-foreground">
                            Dit is de basis die de meeste mensen missen… en waardoor ze{' '}
                            <strong className="text-foreground">jaren blijven strugglen</strong>.
                        </p>

                        <p className="text-xl font-bold text-primary">
                            Hoe langer je wacht… hoe langer je in dezelfde cirkel blijft zitten.
                        </p>
                    </div>
                </div>
            </section>

            {/* AUTHOR */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div ref={author.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-4xl transition-all duration-700 ${author.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <div className="grid items-center gap-10 md:grid-cols-2">
                            <div>
                                <img
                                    src={ebookAuthor}
                                    alt="Thierry van Melis — auteur"
                                    className="w-full rounded-lg shadow-xl"
                                    loading="lazy"
                                />
                            </div>

                            <div>
                                <h2 className="section-title mb-6">
                                    Geschreven door <span className="text-primary">Thierry van Melis</span>
                                </h2>

                                <div className="mb-6 space-y-4">
                                    {[
                                        { icon: Award, text: 'Personal trainer' },
                                        { icon: Clock, text: '+7 jaar ervaring' },
                                        { icon: Heart, text: 'Heeft honderden mensen geholpen met onzekerheid en afvallen' },
                                    ].map(({ icon: Icon, text }, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                                            <span className="text-lg">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="mb-1 text-lg font-semibold">Geen theorie.</p>
                                <p className="text-xl font-extrabold text-primary">Praktijk + echte resultaten.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOWNLOAD FORM */}
            <section id="download-form" className="py-16 md:py-24">
                <div ref={form.ref} className="container mx-auto px-4">
                    <div
                        className={`mx-auto max-w-xl transition-all duration-700 ${form.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    >
                        <div className="mb-10 text-center">
                            <h2 className="section-title mb-4">Download nu gratis het e-book</h2>
                            <p className="text-xl text-muted-foreground">
                                en ontdek wat <strong className="text-foreground">echt werkt</strong>.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="rounded-lg border border-primary/20 bg-primary/10 p-8 text-center">
                                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
                                <h3 className="mb-2 text-2xl font-bold">Bedankt!</h3>
                                <p className="text-muted-foreground">
                                    Je e-mail wordt geopend. Stuur het bericht en je ontvangt het e-book zo snel mogelijk.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleDownload} className="space-y-5 rounded-xl border border-border bg-card p-8 shadow-xl">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">Voornaam *</label>
                                        <input
                                            type="text"
                                            required
                                            value={naam}
                                            onChange={(e) => setNaam(e.target.value)}
                                            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Je voornaam"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">Achternaam *</label>
                                        <input
                                            type="text"
                                            required
                                            value={achternaam}
                                            onChange={(e) => setAchternaam(e.target.value)}
                                            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Je achternaam"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold">E-mailadres *</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="je@email.com"
                                    />
                                </div>

                                <button type="submit" className="btn-hero flex w-full items-center justify-center gap-2">
                                    <Download className="h-5 w-5" />
                                    Download gratis e-book
                                </button>

                                <p className="text-center text-sm text-muted-foreground">
                                    Je ontvangt direct toegang — check je mail binnen 10 seconden
                                </p>

                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4 text-destructive" />
                                    <span className="font-semibold">Beperkt gratis beschikbaar</span>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* EXTRA BOEK FOTO */}
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-md">
                        <img
                            src={ebookDumbbell}
                            alt="E-book Succesvol Afvallen"
                            className="w-full rounded-lg shadow-xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
