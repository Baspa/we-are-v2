import { Head, Link } from '@inertiajs/react'
import { TrendingUp, Star, Award, Users, ArrowRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import member1 from '@/assets/member-1.jpg'
import member10 from '@/assets/member-10.jpg'
import member11 from '@/assets/member-11.jpg'
import member12 from '@/assets/member-12.jpg'
import member13 from '@/assets/member-13.jpg'
import member14 from '@/assets/member-14.jpg'
import member15 from '@/assets/member-15.jpg'
import member16 from '@/assets/member-16.jpg'
import member17 from '@/assets/member-17.jpg'
import member18 from '@/assets/member-18.jpg'
import member19 from '@/assets/member-19.jpg'
import member2 from '@/assets/member-2.jpg'
import member20 from '@/assets/member-20.jpg'
import member3 from '@/assets/member-3.jpg'
import member4 from '@/assets/member-4.jpg'
import member5 from '@/assets/member-5.jpg'
import member6 from '@/assets/member-6.jpg'
import member7 from '@/assets/member-7.jpg'
import member8 from '@/assets/member-8.jpg'
import member9 from '@/assets/member-9.jpg'
import transformation1 from '@/assets/transformation-1.jpg'
import transformation10 from '@/assets/transformation-10.png'
import transformation11 from '@/assets/transformation-11.jpg'
import transformation12 from '@/assets/transformation-12.jpg'
import transformation13 from '@/assets/transformation-13.jpg'
import transformation14 from '@/assets/transformation-14.jpg'
import transformation15 from '@/assets/transformation-15.jpg'
import transformation16 from '@/assets/transformation-16.jpg'
import transformation17 from '@/assets/transformation-17.jpg'
import transformation18 from '@/assets/transformation-18.png'
import transformation19 from '@/assets/transformation-19.png'
import transformation2 from '@/assets/transformation-2.jpg'
import transformation20 from '@/assets/transformation-20.jpg'
import transformation3 from '@/assets/transformation-3.jpg'
import transformation4 from '@/assets/transformation-4.png'
import transformation5 from '@/assets/transformation-5.jpg'
import transformation6 from '@/assets/transformation-6.jpg'
import transformation7 from '@/assets/transformation-7.jpg'
import transformation8 from '@/assets/transformation-8.jpg'
import transformation9 from '@/assets/transformation-9.png'
import InlineContactForm from '@/components/InlineContactForm'
import MainLayout from '@/layouts/MainLayout'

const transformations = [
    transformation1, transformation2, transformation3, transformation4, transformation5,
    transformation6, transformation7, transformation8, transformation9, transformation10,
    transformation11, transformation12, transformation13, transformation14, transformation15,
    transformation16, transformation17, transformation18, transformation19, transformation20,
]

const members = [
    member1, member2, member3, member4, member5,
    member6, member7, member8, member9, member10,
    member11, member12, member13, member14, member15,
    member16, member17, member18, member19, member20,
]

const quotes = [
    '"Weer met een lach in de spiegel kijken"',
    '"Sterker dan je ooit voor mogelijk hield"',
    '"Geen excuses meer, alleen resultaten"',
    '"Dit is pas het begin van jouw verhaal"',
]

const stats = [
    { icon: Users, value: '1000+', label: 'Transformaties' },
    { icon: TrendingUp, value: '100%', label: 'Resultaat Garantie' },
    { icon: Star, value: '5/5', label: '261 Google Reviews' },
    { icon: Award, value: '12-25kg', label: 'Gemiddeld Verlies' },
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

function PhotoGrid({ photos, isVisible, refProp }: { photos: string[]; isVisible: boolean; refProp: React.RefObject<HTMLDivElement | null> }) {
    return (
        <div ref={refProp} className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {photos.map((src, index) => (
                <div
                    key={index}
                    className={`group relative aspect-[3/4] overflow-hidden rounded-xl transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                >
                    <img
                        src={src}
                        alt="Personal Training transformatie resultaat - WE ARE Uden & Schijndel"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
            ))}
        </div>
    )
}

function MemberGrid({ photos, isVisible, refProp }: { photos: string[]; isVisible: boolean; refProp: React.RefObject<HTMLDivElement | null> }) {
    return (
        <div ref={refProp} className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {photos.map((src, index) => (
                <div
                    key={index}
                    className={`group relative aspect-[3/4] overflow-hidden rounded-xl transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                >
                    <img
                        src={src}
                        alt="WE ARE Personal Training lid met resultaat - Uden & Schijndel"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
            ))}
        </div>
    )
}

function QuoteBanner({ quote, isVisible, refProp }: { quote: string; isVisible: boolean; refProp: React.RefObject<HTMLDivElement | null> }) {
    return (
        <div ref={refProp} className={`py-8 text-center transition-all duration-700 md:py-12 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="mx-auto max-w-4xl text-2xl leading-tight text-muted-foreground italic md:text-3xl lg:text-4xl">
                {quote}
            </h3>
        </div>
    )
}

export default function Resultaten() {
    const [showPopup, setShowPopup] = useState(false)
    const [popupDismissed, setPopupDismissed] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
    const { ref: grid1Ref, isVisible: grid1Visible } = useScrollReveal()
    const { ref: q1Ref, isVisible: q1Visible } = useScrollReveal()
    const { ref: memberGrid1Ref, isVisible: memberGrid1Visible } = useScrollReveal()
    const { ref: q2Ref, isVisible: q2Visible } = useScrollReveal()
    const { ref: grid2Ref, isVisible: grid2Visible } = useScrollReveal()
    const { ref: q3Ref, isVisible: q3Visible } = useScrollReveal()
    const { ref: memberGrid2Ref, isVisible: memberGrid2Visible } = useScrollReveal()
    const { ref: q4Ref, isVisible: q4Visible } = useScrollReveal()

    return (
        <MainLayout>
            <Head title="Resultaten Personal Training Uden & Schijndel | WE ARE">
                <meta name="description" content="Bekijk 1000+ transformaties van Personal Training in Uden en Schijndel. Afvallen, spiermassa opbouwen en je leven veranderen. 100% resultaat garantie bij WE ARE." />
                <meta name="keywords" content="Personal Training Uden resultaten, Personal Training Schijndel resultaten, Afvallen Uden, Afvallen Schijndel, Transformatie voor en na, Body transformation" />
                <meta property="og:title" content="1000+ Transformaties | WE ARE Personal Training Uden & Schijndel" />
                <meta property="og:description" content="Bekijk de indrukwekkende voor- en na-foto's van onze leden. Personal Training in Uden en Schijndel met 100% resultaat garantie." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/resultaten" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/resultaten" />
            </Head>

            {/* Hero */}
            <section className="relative overflow-hidden bg-background pb-20 pt-32 md:pb-28 md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div ref={heroRef} className="container relative z-10 px-4">
                    <div className={`mx-auto max-w-4xl text-center transition-all duration-700 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Bewezen Resultaten</p>
                        <h1 className="section-title mb-6">
                            <span className="text-primary">1000+</span> Levens Veranderd
                        </h1>
                        <p className="section-subtitle mx-auto">
                            Onze klanten spreken voor zich. Bekijk de transformaties en laat je inspireren om zelf de eerste stap te zetten.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className={`mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 transition-all delay-300 duration-700 md:grid-cols-4 md:gap-6 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center">
                                <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                                <div className="mb-1 font-display text-3xl text-foreground md:text-4xl">{stat.value}</div>
                                <p className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 1: Voor & Na */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <PhotoGrid photos={transformations.slice(0, 10)} isVisible={grid1Visible} refProp={grid1Ref} />
                </div>
            </section>

            {/* Quote 1 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[0]} isVisible={q1Visible} refProp={q1Ref} />
                </div>
            </section>

            {/* Block 2: Leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(0, 10)} isVisible={memberGrid1Visible} refProp={memberGrid1Ref} />
                </div>
            </section>

            {/* Quote 2 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[1]} isVisible={q2Visible} refProp={q2Ref} />
                </div>
            </section>

            {/* Block 3: Voor & Na */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <PhotoGrid photos={transformations.slice(10, 20)} isVisible={grid2Visible} refProp={grid2Ref} />
                </div>
            </section>

            {/* Quote 3 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[2]} isVisible={q3Visible} refProp={q3Ref} />
                </div>
            </section>

            {/* Block 4: Leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(10, 20)} isVisible={memberGrid2Visible} refProp={memberGrid2Ref} />
                </div>
            </section>

            {/* Quote 4 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[3]} isVisible={q4Visible} refProp={q4Ref} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-10 text-center">
                        <h2 className="section-title mb-6">Klaar voor jouw transformatie?</h2>
                        <p className="text-lg text-muted-foreground">Plan nu je gratis en vrijblijvende kennismaking.</p>
                    </div>
                    <InlineContactForm />
                </div>
            </section>

            {/* Popup CTA */}
            {showPopup && !popupDismissed && (
                <div className="animate-fade-in-up fixed bottom-6 left-4 right-4 z-50 md:left-1/2 md:right-auto md:-translate-x-1/2">
                    <div className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-2xl md:gap-4 md:px-6 md:py-4">
                        <Link
                            href="/contact"
                            className="btn-hero pulse-glow inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold"
                        >
                            Jouw transformatie begint met koffie
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <button
                            onClick={() => setPopupDismissed(true)}
                            className="p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="Sluiten"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
        </MainLayout>
    )
}
