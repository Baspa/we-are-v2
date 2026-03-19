import { Head } from '@inertiajs/react'
import { Check, MapPin, Phone, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import atmosphere1 from '@/assets/atmosphere-1.jpg'
import gym2 from '@/assets/gym-2.jpg'
import gym3 from '@/assets/gym-3.jpg'
import InlineContactForm from '@/components/InlineContactForm'
import MainLayout from '@/layouts/MainLayout'

const benefits = [
    "Op maat gemaakt voeding,- en trainingsschema's",
    "Geen dieet maar 'normaal' eten",
    'Een programma passend gemaakt in jouw leven',
    'Een lange termijn plan om een terugval uit te sluiten',
    'Dagelijks contact met onze Personal Trainers',
    "Personal training gericht op meer dan alleen 'pompen'",
    'Geen belemmeringen zoals bodybuilders en drukte',
]

const useScrollReveal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
setIsVisible(true)
}
        }, { threshold: 0.1 })

        if (ref.current) {
observer.observe(ref.current)
}

        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
}

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WE ARE Personal Training Schijndel',
    description: 'Personal Training in Schijndel. Fysieke én mentale transformatie met De Transformatie Formule.',
    url: 'https://we-are.club/locatie-schijndel',
    telephone: '+31636123542',
    email: 'info@we-are.club',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Spoorlaan 18D',
        addressLocality: 'Schijndel',
        postalCode: '5481 SK',
        addressCountry: 'NL',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.6211',
        longitude: '5.4369',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '200',
    },
    priceRange: '€€',
    openingHours: 'Mo-Fr 06:00-22:00, Sa 08:00-18:00',
}

export default function LocatieSchijndel() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
    const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal()
    const { ref: noJojoRef, isVisible: noJojoVisible } = useScrollReveal()
    const { ref: gymRef, isVisible: gymVisible } = useScrollReveal()

    return (
        <MainLayout>
            <Head title="Personal Training Schijndel | WE ARE - Afvallen & Transformeren">
                <meta name="description" content="Zoek je Personal Training in Schijndel? WE ARE helpt je afvallen en transformeren in 12 weken. 1000+ succesvolle transformaties, persoonlijke begeleiding en 100% resultaat garantie." />
                <meta name="keywords" content="Personal Training Schijndel, Personal Trainer Schijndel, Afvallen Schijndel, Sportschool Schijndel, PT Schijndel, Fitness Schijndel, Transformatie Schijndel" />
                <meta property="og:title" content="Personal Training Schijndel | WE ARE Personal Training" />
                <meta property="og:description" content="Personal Training in Schijndel. Transformeer je lichaam én geest in 12 weken. 1000+ succesvolle transformaties." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/locatie-schijndel" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/locatie-schijndel" />
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            </Head>

            {/* Hero */}
            <section className="relative overflow-hidden bg-background pb-20 pt-32 md:pb-28 md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div ref={heroRef} className="container relative z-10 px-4">
                    <div className={`mx-auto max-w-4xl text-center transition-all duration-700 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="mb-4 flex items-center justify-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Locatie Schijndel</p>
                        </div>
                        <h1 className="section-title mb-6">
                            Personal Training Schijndel zet een <span className="text-primary">nieuwe standaard</span> neer
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro + Image */}
            <section className="bg-card py-16 md:py-24">
                <div ref={aboutRef} className="container px-4">
                    <div className={`grid items-center gap-12 transition-all duration-700 md:grid-cols-2 ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div>
                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                WE ARE your physical and mental personal training Schijndel is de nieuwe standaard in Schijndel. Het unieke Personal Training programma is een vernieuwend concept. Met ons twaalf weken programma helpen we de inwoners van Schijndel en omstreken om de transformatie van hun leven te maken zonder een jojo-effect als gevolg!
                            </p>
                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                De filosofie is dat je het lichaam kunt realiseren waar je mentaal kunt komen. Met meer dan 1000+ transformaties kunnen we onszelf de specialisten noemen van Schijndel en omstreken.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-foreground">{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/transformatieformule#contact" className="btn-hero mt-8 inline-block">Ik wil dit ook!</a>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                            <img src={gym3} alt="Personal Training Schijndel" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Afvallen zonder jojo */}
            <section className="bg-background py-16 md:py-24">
                <div ref={noJojoRef} className="container px-4">
                    <div className={`grid items-center gap-12 transition-all duration-700 md:grid-cols-2 ${noJojoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="order-2 aspect-[4/3] overflow-hidden rounded-2xl md:order-1">
                            <img src={atmosphere1} alt="Sportschool Schijndel" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="section-title mb-6">Afvallen zonder een <span className="text-primary">jojo-effect!</span></h2>
                            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                                Waarschijnlijk heb je al meerdere pogingen gedaan die telkens niet slaagden omdat je aan het jojoën ging. Dit is een veelvoorkomend probleem van onze potentiële leden in Schijndel. Met ons uniek twaalf weken programma leren we onze leden hoe ze dit kunnen voorkomen en bieden we onbeperkt nazorg om een terugval uit te sluiten.
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Eerst gaan we twaalf weken aan de slag met Personal Training of Small Group training. Deze twaalf weken zijn onderverdeeld in drie fases waarin we je steeds meer vrijheid bieden. Hierdoor realiseren we stapsgewijs een leefstijl die passend is bij jouw leven. Na deze drie fases staan onze Personal Trainers voor je klaar om je een warm welkom te heten in onze gym in Schijndel.
                            </p>
                            <a href="/transformatieformule#contact" className="btn-hero mt-8 inline-block">Ik wil dit ook!</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onze sportschool */}
            <section className="bg-card py-16 md:py-24">
                <div ref={gymRef} className="container px-4">
                    <div className={`grid items-center gap-12 transition-all duration-700 md:grid-cols-2 ${gymVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div>
                            <h2 className="section-title mb-6">Onze sportschool in <span className="text-primary">Schijndel</span></h2>
                            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                                Een unieke sportschool in Schijndel waar onze leden eerst Personal Training volgen om vervolgens de behaalde resultaten te onderhouden in onze gym om een terugval uit te sluiten!
                            </p>
                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                We zijn nu al benieuwd naar je verhaal en ontvangen je graag in onze sportschool in Schijndel. Wie weet is de klik op onderstaande knop de verandering van je leven!
                            </p>
                            <div className="mb-3 flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                                <span className="text-foreground">Spoorlaan 18D, 5481 SK Schijndel</span>
                            </div>
                            <div className="mb-3 flex items-start gap-3">
                                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                                <a href="tel:+31636123542" className="text-foreground transition-colors hover:text-primary">+31 6 36 12 35 42</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                                <a href="mailto:info@we-are.club" className="text-foreground transition-colors hover:text-primary">info@we-are.club</a>
                            </div>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                            <img src={gym2} alt="Sportschool Schijndel" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-10 text-center">
                        <h2 className="section-title mb-6">Laten we elkaar <span className="text-primary">ontmoeten!</span></h2>
                        <p className="text-lg text-muted-foreground">
                            Eén klik kan het begin zijn van jouw transformatie. We zijn benieuwd naar wie je bent en waar we je mee kunnen helpen.
                        </p>
                    </div>
                    <InlineContactForm />
                </div>
            </section>
        </MainLayout>
    )
}
