import { Head, Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import MainLayout from '@/layouts/MainLayout'

const useScrollReveal = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
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

const faqItems = [
    {
        question: 'Beginnen zonder conditie? Geen probleem!',
        answer: 'Een veelvoorkomende zorg voor velen is het gebrek aan conditie. "Kan ik wel beginnen met trainen als ik geen conditie heb?" is een vraag die vaak gesteld wordt. Bij WE ARE is het antwoord een volmondig ja. Het programma is specifiek ontworpen om iedereen, ongeacht hun startpunt, te helpen hun lichaam en geest naar de beste versie ooit te tillen. Het maakt niet uit waar je begint; wat telt, is waar je naartoe gaat.',
    },
    {
        question: 'Wat is de investering? Dat bepaal jezelf.',
        answer: 'Een slimme keuze voor je gezondheid en welzijn? Dat is waar onze leden voor gaan. Bij WE ARE investeer je in je gezondheid, kennis én toekomst. Je kunt kiezen voor ons twaalf weken programma vanaf 1335 euro (in drie termijnen te betalen) om mogelijk daarna een nazorg abonnement te nemen vanaf 67,50 euro per maand. Ook is er een jaarprogramma mogelijk vanaf 175 euro per maand. Wat je uiteindelijk betaalt, hangt af van hoe en hoe vaak je wilt trainen. In een kennismaking krijg je een gepast overzicht om te bekijken welke investering het beste bij je past.',
    },
    {
        question: 'Wat maakt WE ARE anders? Nou dit dus.',
        answer: 'In een wereld vol fitnessmogelijkheden, wat maakt WE ARE dan zo uniek? Het antwoord ligt in onze combinatie van ons intensief programma met de mogelijkheid om daarna gebruik te maken van onze exclusieve nazorg, een aanpak die je nergens anders in de regio vindt. Deze combinatie zorgt ervoor dat je niet alleen je doelen bereikt, maar deze ook kunt onderhouden. Met een limiet van tien personen tegelijk en een no-bodybuilders beleid, garanderen we dat je altijd toegang hebt tot de apparatuur die je nodig hebt, zonder wachttijden.',
    },
    {
        question: 'Wanneer kun je beginnen? Dat bepaal je zelf.',
        answer: 'De vraag is niet wanneer je kunt beginnen, maar wanneer je wilt beginnen. Bij WE ARE kun je meestal binnen 7 dagen starten met jouw transformatie. Dankzij ons deskundige en uitgebreide team is er altijd ruimte voor jou. Het perfecte moment om te starten? Dat is nu. Wachten op het perfecte moment is als wachten op alle stoplichten in Nederland om tegelijk op groen te springen; het gaat simpelweg niet gebeuren. Het beste moment om te starten is wanneer je voelt dat je klaar bent voor verandering.',
    },
    {
        question: 'Heb je altijd resultaat? Absoluut!',
        answer: 'Misschien heb je onze successen al gezien op sociale media en je afgevraagd: hoe is dit mogelijk? Het antwoord is eenvoudig. WE ARE personal training is het resultaat van minimaal vijf jaar aan verfijning en perfectionering. Onze wetenschappelijk onderbouwde schema\'s en onze focus op mensen die hun transformatie serieus nemen, hebben een ongekend succespercentage opgeleverd. We selecteren op voorhand of we je kunnen helpen, dat maakt ons al uniek. Daarnaast zal je altijd resultaat hebben wanneer je exact doet wat we van je vragen.',
    },
]

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
}

export default function FAQ() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal()
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal()

    return (
        <MainLayout>
            <Head title="FAQ Personal Training Uden & Schijndel | WE ARE">
                <meta name="description" content="Veelgestelde vragen over Personal Training in Uden en Schijndel. Alles over investering, conditie, resultaten en wat WE ARE Personal Training uniek maakt." />
                <meta name="keywords" content="Personal Training Uden FAQ, Personal Training Schijndel vragen, Afvallen kosten, Personal Trainer prijzen, WE ARE vragen" />
                <meta property="og:title" content="Veelgestelde Vragen | WE ARE Personal Training Uden & Schijndel" />
                <meta property="og:description" content="Alles wat je wilt weten over Personal Training bij WE ARE in Uden en Schijndel." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/faq" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/faq" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>

            {/* Hero */}
            <section className="relative flex min-h-[50vh] items-center justify-center pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
                <div ref={heroRef} className={`container relative z-10 px-4 text-center transition-all duration-700 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">FAQ</p>
                    <h1 className="mb-6 text-4xl text-foreground md:text-6xl lg:text-7xl">
                        Veelgestelde Vragen over Personal Training in Uden & Schijndel
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        Alles wat je wilt weten over WE ARE Personal Training in Uden en Schijndel
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-card py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4">
                    <div ref={contentRef} className={`transition-all duration-700 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="rounded-xl border border-border bg-background/50 px-6 backdrop-blur-sm"
                                >
                                    <AccordionTrigger className="text-left text-lg font-semibold transition-colors hover:text-primary hover:no-underline md:text-xl">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div ref={ctaRef} className={`text-center transition-all duration-700 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="mb-6 text-3xl text-foreground md:text-5xl">
                            Laten we elkaar ontmoeten!
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
                            Eén klik op onderstaande knop kan het begin zijn van jouw transformatie. We zijn benieuwd naar wie je bent en waar we je mee kunnen helpen.
                        </p>
                        <Link href="/#contact" className="btn-hero group inline-flex items-center gap-2">
                            Start Jouw Transformatie
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
