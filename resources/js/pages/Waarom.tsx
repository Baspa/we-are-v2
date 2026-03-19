import { useEffect, useRef, useState } from 'react'
import { Head } from '@inertiajs/react'
import MainLayout from '@/layouts/MainLayout'
import InlineContactForm from '@/components/InlineContactForm'
import { Clock, Users, Heart, Brain, Shield, Star } from 'lucide-react'
import gym1 from '@/assets/gym-1.jpg'
import gym2 from '@/assets/gym-2.jpg'
import atmosphere1 from '@/assets/atmosphere-1.jpg'
import atmosphere2 from '@/assets/atmosphere-2.jpg'
import atmosphere3 from '@/assets/atmosphere-3.jpg'
import atmosphere5 from '@/assets/atmosphere-5.jpg'
import atmosphere7 from '@/assets/atmosphere-7.jpg'
import waaromResultaten from '@/assets/waarom-resultaten.jpg'

const useScrollReveal = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true)
        }, { threshold: 0.15 })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
    return { ref, isVisible }
}

const reasons = [
    {
        icon: Clock,
        title: 'Tijdbesparend voor de drukbezette mens',
        description: 'Laten we eerlijk zijn: tijd is kostbaar. We hebben allemaal een druk leven met werk, gezin en sociale verplichtingen. Bij WE ARE snappen we dat je geen uren per dag kunt missen of in de keuken wilt gaan staan. Ons programma is ontworpen om efficiënt en effectief te zijn. Korte, krachtige trainingen en praktische gerechten die passen bij jouw leven.',
        image: atmosphere1,
    },
    {
        icon: Heart,
        title: 'Maatwerk omdat jij uniek bent',
        description: 'Jouw lichaam, jouw doelen en jouw uitdagingen zijn uniek. Daarom geloven we niet in een one-size-fits-all aanpak. We nemen de tijd om jou echt te leren kennen en stellen een persoonlijk plan op dat past bij jouw leven. We evalueren wekelijks en passen aan waar nodig.',
        image: atmosphere2,
    },
    {
        icon: Users,
        title: 'Kwaliteit boven kwantiteit',
        description: 'We kunnen niet iedereen helpen, en dat proberen we ook niet. Met een limiet van 30 intensief begeleide leden zorgen we ervoor dat iedereen de aandacht krijgt die hij of zij verdient. Bij ons ben je geen nummer, maar een lid van de WE ARE familie.',
        image: atmosphere3,
    },
    {
        icon: Brain,
        title: 'Fysiek én mentaal',
        description: "Echte verandering begint van binnen. Het gaat niet alleen om de kilo's die je verliest, maar om de gewoontes die je verandert. Bij WE ARE coachen we je niet alleen fysiek, maar ook mentaal. We helpen je om de patronen te doorbreken die je in de weg staan.",
        image: atmosphere5,
    },
    {
        icon: Shield,
        title: 'Exclusieve nazorg',
        description: 'Je doel behalen is één ding, maar het vasthouden is een tweede. Na het behalen van je doel kan je gebruik maken van ons uitgebreide nazorg abonnement. Maandelijkse gesprekken, sportieve uitdagingen, groepslessen en een zaal met gelijkgestemden.',
        image: atmosphere7,
    },
    {
        icon: Star,
        title: 'Bewezen resultaten, geen loze beloftes',
        description: 'We kunnen wel zeggen dat we de beste zijn, maar we laten het liever zien. Onze leden zijn het levende bewijs dat de WE ARE methode werkt. Transformaties, succesverhalen, mensen die hun leven hebben veranderd.',
        image: waaromResultaten,
    },
]

export default function Waarom() {
    const hero = useScrollReveal()
    const reasonsSection = useScrollReveal()
    const ctaSection = useScrollReveal()

    return (
        <MainLayout>
            <Head title="Waarom WE ARE Personal Training Uden & Schijndel">
                <meta name="description" content="Waarom kiezen voor Personal Training bij WE ARE in Uden en Schijndel? Bewezen resultaten, persoonlijke begeleiding, fysiek én mentaal coaching. 1000+ transformaties." />
                <meta name="keywords" content="Personal Training Uden, Personal Training Schijndel, Waarom WE ARE, Personal Trainer, Afvallen Uden, Afvallen Schijndel, Beste personal trainer" />
                <meta property="og:title" content="Waarom WE ARE Personal Training Uden & Schijndel" />
                <meta property="og:description" content="Ontdek waarom WE ARE de beste Personal Training is in Uden en Schijndel. 1000+ transformaties, bewezen methode." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/waarom" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/waarom" />
            </Head>

            {/* Hero */}
            <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img src={gym1} alt="" className="h-full w-full object-cover opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
                </div>

                <div ref={hero.ref} className={`container relative z-10 mx-auto max-w-4xl px-4 text-center transition-all duration-1000 ${hero.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">We Are</span>
                    <h1 className="mb-6 mt-3 text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
                        Waarom de<br />
                        <span className="text-gradient-brand italic">WE ARE methode</span>
                    </h1>
                    <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
                        <p>WE ARE Personal Training Uden en Schijndel is ontstaan vanuit één duidelijke visie: <strong className="text-foreground">samen is sterker dan alleen.</strong></p>
                        <p>Geen standaard PT-studio, maar een community van mensen die elkaar motiveren, uitdagen en ondersteunen in het behalen én behouden van hun doelen.</p>
                        <p>WE ARE staat voor onze leden. Voor samen trainen, samen groeien en samen verantwoordelijkheid nemen.</p>
                        <p>Dit is geen quick fix. Dit is een <strong className="text-foreground">bewezen formule</strong>, gedragen door een sterke community.</p>
                        <p className="font-semibold text-primary">Wij zijn WE ARE. Sluit jij aan?</p>
                    </div>
                </div>
            </section>

            {/* Reasons - Alternating layout */}
            <section className="py-24">
                <div ref={reasonsSection.ref} className="container mx-auto max-w-6xl px-4">
                    <div className="space-y-24">
                        {reasons.map((reason, index) => {
                            const isEven = index % 2 === 0
                            return (
                                <div
                                    key={reason.title}
                                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 transition-all duration-700 md:gap-16 ${reasonsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Image */}
                                    <div className="md:w-1/2">
                                        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                                            <img
                                                src={reason.image}
                                                alt={reason.title}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                            {/* Number badge */}
                                            <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90">
                                                <span className="font-display text-lg font-bold text-primary-foreground">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="md:w-1/2">
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                                <reason.icon className="h-5 w-5 text-primary" />
                                            </div>
                                        </div>
                                        <h2 className="mb-4 text-3xl md:text-4xl">{reason.title}</h2>
                                        <p className="text-lg leading-relaxed text-muted-foreground">{reason.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Final CTA with Contact Form */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0">
                    <img src={gym2} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
                </div>

                <div ref={ctaSection.ref} className={`container relative z-10 mx-auto max-w-3xl px-4 transition-all duration-700 ${ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="mb-10 text-center">
                        <h2 className="section-title mb-6">
                            Dus, waar wacht<br />
                            <span className="text-gradient-brand italic">je nog op?</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            De WE ARE methode is meer dan een fitnessprogramma. Het is een levensveranderende ervaring. Ben je klaar om de beste versie van jezelf te worden?
                        </p>
                    </div>
                    <InlineContactForm />
                </div>
            </section>
        </MainLayout>
    )
}
