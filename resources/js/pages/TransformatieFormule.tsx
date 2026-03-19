import { Head } from '@inertiajs/react'
import useEmblaCarousel from 'embla-carousel-react'
import { CheckCircle, ArrowRight, Zap, Dumbbell, Target, Trophy, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'
import gym1 from '@/assets/gym-1.jpg'
import gym2 from '@/assets/gym-2.jpg'
import retainPhoto from '@/assets/retain-photo.jpg'
import transformation1 from '@/assets/transformation-1.jpg'
import transformation2 from '@/assets/transformation-2.jpg'
import transformation3 from '@/assets/transformation-3.jpg'
import transformation4 from '@/assets/transformation-4.png'
import transformation5 from '@/assets/transformation-5.jpg'
import transformation6 from '@/assets/transformation-6.jpg'
import InlineContactForm from '@/components/InlineContactForm'
import MainLayout from '@/layouts/MainLayout'

const useScrollReveal = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
setIsVisible(true)
}
        }, { threshold: 0.15 })

        if (ref.current) {
observer.observe(ref.current)
}

        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
}

const phases = [
    {
        week: 'Week 1 - 4',
        title: 'Reset',
        icon: Zap,
        color: 'from-primary/20 to-primary/5',
        borderColor: 'border-primary/30',
        description: 'Doorbreek je oude patronen en leg het fundament voor jouw nieuwe lichaam. In de eerste weken brengen we jouw energie terug op peil.',
        result: 'Je krijgt direct grip op je leefstijl en legt een stevig fundament voor de transformatie die volgt.',
        bullets: [
            '2 tot 4 keer trainen per week',
            'Detox van (teveel) suikers, alcohol, junkfood',
            'Starten met isolatie oefeningen voor een stevige basis',
            'Slaap en stressmanagement voor direct meer energie',
            'Eerste resultaten zichtbaar (gewicht, energie, mindset)',
        ],
    },
    {
        week: 'Week 5 - 9',
        title: 'Rebuild',
        icon: Dumbbell,
        color: 'from-secondary/20 to-secondary/5',
        borderColor: 'border-secondary/30',
        description: 'Bouw aan kracht, spiermassa en een atletische look. Dit is de fase waarin je lichaam zichtbaar verandert.',
        result: 'Jouw lichaam wordt strakker, sterker en gespierder – de eerste échte transformatie is zichtbaar.',
        bullets: [
            '2 tot 4 keer trainen per week',
            'Gericht trainingsschema met compound oefeningen',
            'Gepersonaliseerd voedingsplan (spieropbouw & herstel)',
            'Voortgangsmetingen: lichaamssamenstelling',
            'Mindset-coaching: discipline, routines, gewoontes',
        ],
    },
    {
        week: 'Week 9 - 12',
        title: 'Refine',
        icon: Target,
        color: 'from-primary/20 to-secondary/5',
        borderColor: 'border-primary/30',
        description: 'Laat je transformatie aan de wereld zien. In de laatste fase gaan we voor definitie en maximale vorm.',
        result: 'Een fysiek waar jij én je omgeving niet omheen kunnen.',
        bullets: [
            '2 tot 4 keer trainen per week',
            'Calorie- en macro-aanpassingen',
            'Cardio & metabole training toevoegen',
            'Voortgangsmetingen: vetpercentage en kracht',
            'Zelfvertrouwen-booster: je straalt de transformatie uit',
        ],
    },
    {
        week: 'Week 12+',
        title: 'Retain',
        icon: Trophy,
        color: 'from-secondary/20 to-primary/5',
        borderColor: 'border-secondary/30',
        description: 'Behoud je resultaat en blijf sterker, fitter en strakker dan ooit. De echte uitdaging is blijvend resultaat behouden.',
        result: 'Jouw transformatie wordt blijvend, zodat je lichaam en mindset voor altijd in topvorm blijven.',
        bullets: [
            'Nieuwe doelen voor 3, 6 en 12 maanden met jouw coach',
            'Maandelijkse check-up: evalueren en actie ondernemen',
            'Onbeperkt trainen op al onze locaties – 6:00u tot 23:00u',
            'Comfortabele en veilige omgeving met gelijkgestemden',
            'Elke maand verantwoorden over je acties',
        ],
    },
]

const stats = [
    { number: '1000+', label: 'Transformaties' },
    { number: '9.8', label: 'Gemiddeld cijfer' },
    { number: '100%', label: 'Resultaat garantie' },
    { number: '2', label: 'Locaties' },
]

const transformationImages = [transformation1, transformation2, transformation3, transformation4, transformation5, transformation6]

const youtubeTestimonials = [
    { name: 'Ferry', subtitle: '28 jaar – ondernemer', id: 'xMxY9zGSDxs' },
    { name: 'Jeroen', subtitle: '45 jaar – Packaging Expert Campina', id: 'LuSOuWhegkM' },
    { name: 'Maaike', subtitle: '30 jaar – kapster', id: 'yj8tZ5mQ7I0' },
    { name: 'Renee', subtitle: '27 jaar – paardentandarts', id: 'UAgIZI6LKZY' },
]

function TestimonialCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback(() => {
        if (!emblaApi) {
return
}

        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) {
return
}

        onSelect()
        emblaApi.on('select', onSelect)

        return () => {
 emblaApi.off('select', onSelect) 
}
    }, [emblaApi, onSelect])

    return (
        <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex gap-4 md:gap-6">
                    {youtubeTestimonials.map((t) => (
                        <div key={t.id} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%]">
                            <div className="overflow-hidden rounded-2xl border border-border bg-card">
                                <div className="aspect-video">
                                    <iframe
                                        className="h-full w-full"
                                        src={`https://www.youtube.com/embed/${t.id}`}
                                        title={`Het succesverhaal van ${t.name}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold">{t.name}</h3>
                                    <p className="text-sm text-muted-foreground">{t.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className={`absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-opacity ${canScrollPrev ? 'opacity-100' : 'opacity-30'}`}
            >
                <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
                onClick={() => emblaApi?.scrollNext()}
                className={`absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-opacity ${canScrollNext ? 'opacity-100' : 'opacity-30'}`}
            >
                <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
        </div>
    )
}

function TransformationCarousel({ isVisible }: { isVisible: boolean }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback(() => {
        if (!emblaApi) {
return
}

        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) {
return
}

        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex gap-3 md:gap-4">
                    {transformationImages.map((img, i) => (
                        <div key={i} className="min-w-0 flex-[0_0_45%] md:flex-[0_0_32%]">
                            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                                <img src={img} alt={`Transformatie ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className={`absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-opacity ${canScrollPrev ? 'opacity-100' : 'opacity-30'}`}
                aria-label="Vorige"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                onClick={() => emblaApi?.scrollNext()}
                className={`absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-opacity ${canScrollNext ? 'opacity-100' : 'opacity-30'}`}
                aria-label="Volgende"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}

export default function TransformatieFormule() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
    const { ref: phasesRef, isVisible: phasesVisible } = useScrollReveal()
    const { ref: transformationsRef, isVisible: transformationsVisible } = useScrollReveal()
    const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal()

    return (
        <MainLayout>
            <Head title="De Transformatie Formule | Personal Training Uden & Schijndel">
                <meta name="description" content="Ontdek De Transformatie Formule van WE ARE Personal Training in Uden en Schijndel. Ons bewezen 12-weken programma voor afvallen en fysieke én mentale transformatie." />
                <meta name="keywords" content="Transformatie Formule, 12 weken programma, Personal Training Uden, Personal Training Schijndel, Afvallen Uden, Afvallen Schijndel, Body transformation, Personal Trainer" />
                <meta property="og:title" content="De Transformatie Formule | WE ARE Personal Training Uden & Schijndel" />
                <meta property="og:description" content="Ons bewezen 12-weken programma. Reset. Rebuild. Refine. Personal Training in Uden en Schijndel." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/transformatieformule" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/transformatieformule" />
            </Head>

            {/* Hero Section */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
                {/* Background */}
                <div className="absolute inset-0">
                    <img src={gym1} alt="" className="h-full w-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                </div>

                <div ref={heroRef} className={`container relative z-10 mx-auto max-w-5xl px-4 text-center transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Bewezen methode – 1000+ transformaties</span>
                    </div>

                    <h1 className="mb-6 text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
                        De Transformatie<br />
                        <span className="text-gradient-brand italic">Formule</span>
                    </h1>

                    <p className="mb-6 font-display text-2xl text-primary italic md:text-3xl">
                        Reset. Rebuild. Refine.
                    </p>

                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                        Tijdens deze periode van intensieve begeleiding en exclusieve nazorg begeleiden we je op fysiek én mentaal gebied. In 12 weken transformeer je niet alleen je lichaam, maar ook je mindset.
                    </p>

                    {/* Stats */}
                    <div className="mx-auto mb-12 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="stat-number mb-1 text-4xl md:text-5xl">{stat.number}</div>
                                <div className="stat-label text-xs">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a href="#contact" className="btn-hero pulse-glow px-10 py-5 text-lg">
                            Start Jouw Transformatie
                            <ArrowRight className="ml-2 inline-block h-5 w-5" />
                        </a>
                        <a href="#fases" className="btn-outline-hero px-10 py-5 text-lg">
                            Bekijk Het Programma
                        </a>
                    </div>
                </div>
            </section>

            {/* YouTube embed */}
            <section className="bg-card py-16">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/celqf-xRF5I"
                            title="How WE ARE Doing It"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* Phases Section */}
            <section id="fases" className="py-24 md:py-32">
                <div ref={phasesRef} className="container mx-auto max-w-6xl px-4">
                    <div className={`mb-20 text-center transition-all duration-700 ${phasesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="section-title mb-4">De 4 Fases</h2>
                        <p className="section-subtitle mx-auto">Elke fase is zorgvuldig ontworpen om je stap voor stap naar je beste versie te brengen.</p>
                    </div>

                    <div className="space-y-8">
                        {phases.map((phase, index) => (
                            <div
                                key={phase.title}
                                className={`relative rounded-2xl border ${phase.borderColor} bg-gradient-to-br ${phase.color} p-8 transition-all duration-700 md:p-12 ${phasesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex flex-col gap-8 md:flex-row">
                                    {/* Left side */}
                                    <div className="md:w-1/2">
                                        <div className="mb-4 flex items-center gap-4">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                                                <phase.icon className="h-7 w-7 text-primary" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold uppercase tracking-wider text-primary">{phase.week}</span>
                                                <h3 className="text-3xl md:text-4xl">{phase.title}</h3>
                                            </div>
                                        </div>

                                        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                                            {phase.description}
                                        </p>

                                        <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                                            <p className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">Resultaat</p>
                                            <p className="font-medium text-foreground">{phase.result}</p>
                                        </div>
                                    </div>

                                    {/* Right side - bullets */}
                                    <div className="md:w-1/2">
                                        <ul className="space-y-4">
                                            {phase.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3">
                                                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                                    <span className="font-medium text-foreground/90">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Phase number watermark */}
                                <div className="pointer-events-none absolute right-6 top-4 font-display text-8xl font-bold text-foreground/[0.03]">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        ))}

                        {/* Retain photo - below the phases */}
                        <div className="overflow-hidden rounded-xl">
                            <img src={retainPhoto} alt="Resultaat behouden - WE ARE lid met meetresultaat" className="h-auto w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformations Carousel */}
            <section className="bg-card py-24">
                <div ref={transformationsRef} className="container mx-auto max-w-6xl px-4">
                    <div className={`mb-16 text-center transition-all duration-700 ${transformationsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">We Are</span>
                        <h2 className="section-title mb-4 mt-2">Changing Lives</h2>
                        <p className="section-subtitle mx-auto">
                            Een greep uit deelnemers die met behulp van ons een ware transformatie zijn ondergaan. Ook voor jou is dit mogelijk.
                        </p>
                    </div>

                    <TransformationCarousel isVisible={transformationsVisible} />
                </div>
            </section>

            {/* YouTube Testimonials Carousel */}
            <section className="py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-16 text-center">
                        <h2 className="section-title mb-4">Luister naar hun verhaal</h2>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* Nog niet overtuigd */}
            <section className="bg-card py-16">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <h2 className="section-title mb-8">Nog niet overtuigd?</h2>
                    <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/lxOrVuw7bLI"
                            title="WE ARE Stories"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA with Contact Form */}
            <section id="contact" className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0">
                    <img src={gym2} alt="" className="h-full w-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
                </div>

                <div ref={ctaRef} className={`container relative z-10 mx-auto max-w-3xl px-4 transition-all duration-700 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="mb-10 text-center">
                        <h2 className="section-title mb-6">
                            Zet vandaag de stap<br />
                            <span className="text-gradient-brand italic">naar jouw transformatie</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Eén klik op onderstaande knop kan het begin zijn van jouw transformatie. We zijn benieuwd naar wie je bent en waar we je mee kunnen helpen.
                        </p>
                    </div>
                    <InlineContactForm />
                </div>
            </section>
        </MainLayout>
    )
}
