import { Head, Link } from '@inertiajs/react'
import { TrendingUp, Star, Award, Users, ArrowRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import transformation1 from '@/assets/transformation-1.jpg'
import transformation2 from '@/assets/transformation-2.jpg'
import transformation3 from '@/assets/transformation-3.jpg'
import transformation4 from '@/assets/transformation-4.png'
import transformation5 from '@/assets/transformation-5.jpg'
import transformation6 from '@/assets/transformation-6.jpg'
import transformation7 from '@/assets/transformation-7.jpg'
import transformation8 from '@/assets/transformation-8.jpg'
import transformation9 from '@/assets/transformation-9.png'
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
import transformation20 from '@/assets/transformation-20.jpg'
import transformation21 from '@/assets/transformation-21.jpg'
import transformation22 from '@/assets/transformation-22.jpg'
import transformation23 from '@/assets/transformation-23.jpg'
import transformation24 from '@/assets/transformation-24.jpg'
import transformation25 from '@/assets/transformation-25.jpg'
import transformation26 from '@/assets/transformation-26.jpg'
import transformation27 from '@/assets/transformation-27.jpg'
import transformation28 from '@/assets/transformation-28.jpg'
import transformation29 from '@/assets/transformation-29.jpg'
import transformation30 from '@/assets/transformation-30.jpg'
import transformation31 from '@/assets/transformation-31.jpg'
import transformation32 from '@/assets/transformation-32.jpg'
import transformation33 from '@/assets/transformation-33.jpg'
import transformation34 from '@/assets/transformation-34.jpg'
import transformation35 from '@/assets/transformation-35.jpg'
import transformation36 from '@/assets/transformation-36.png'
import transformation37 from '@/assets/transformation-37.jpg'
import transformation38 from '@/assets/transformation-38.jpg'
import transformation39 from '@/assets/transformation-39.jpg'
import transformation42 from '@/assets/transformation-42.jpg'
import transformation43 from '@/assets/transformation-43.jpg'
import transformation44 from '@/assets/transformation-44.jpg'
import transformation45 from '@/assets/transformation-45.png'
import transformation46 from '@/assets/transformation-46.jpg'
import transformation47 from '@/assets/transformation-47.jpg'
import transformation48 from '@/assets/transformation-48.jpg'
import transformation49 from '@/assets/transformation-49.jpg'
import transformation50 from '@/assets/transformation-50.jpg'
import transformation51 from '@/assets/transformation-51.png'
import transformation52 from '@/assets/transformation-52.png'
import transformation53 from '@/assets/transformation-53.jpg'
import transformation54 from '@/assets/transformation-54.png'

import member1 from '@/assets/member-1.jpg'
import member2 from '@/assets/member-2.jpg'
import member3 from '@/assets/member-3.jpg'
import member4 from '@/assets/member-4.jpg'
import member5 from '@/assets/member-5.jpg'
import member6 from '@/assets/member-6.jpg'
import member7 from '@/assets/member-7.jpg'
import member8 from '@/assets/member-8.jpg'
import member9 from '@/assets/member-9.jpg'
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
import member20 from '@/assets/member-20.jpg'
import member21 from '@/assets/member-21.jpg'
import member22 from '@/assets/member-22.jpg'
import member23 from '@/assets/member-23.jpg'
import member24 from '@/assets/member-24.jpg'
import member25 from '@/assets/member-25.jpg'
import member26 from '@/assets/member-26.jpg'
import member27 from '@/assets/member-27.jpg'
import member28 from '@/assets/member-28.jpg'
import member29 from '@/assets/member-29.jpg'
import member30 from '@/assets/member-30.jpg'
import member31 from '@/assets/member-31.jpg'
import member32 from '@/assets/member-32.jpg'
import member33 from '@/assets/member-33.jpg'
import member34 from '@/assets/member-34.jpg'
import member35 from '@/assets/member-35.jpg'
import member36 from '@/assets/member-36.jpg'
import member37 from '@/assets/member-37.jpg'
import member38 from '@/assets/member-38.jpg'
import member39 from '@/assets/member-39.jpg'
import member40 from '@/assets/member-40.jpg'
import member41 from '@/assets/member-41.jpg'
import member42 from '@/assets/member-42.jpg'
import member43 from '@/assets/member-43.jpg'
import member44 from '@/assets/member-44.jpg'
import member45 from '@/assets/member-45.jpg'
import member46 from '@/assets/member-46.jpg'
import member47 from '@/assets/member-47.jpg'
import member48 from '@/assets/member-48.jpg'
import member49 from '@/assets/member-49.jpg'
import member50 from '@/assets/member-50.jpg'

import InlineContactForm from '@/components/InlineContactForm'
import MainLayout from '@/layouts/MainLayout'

const transformations = [
    transformation1, transformation2, transformation3, transformation4, transformation5,
    transformation6, transformation7, transformation8, transformation9, transformation10,
    transformation11, transformation12, transformation13, transformation14, transformation15,
    transformation16, transformation17, transformation18, transformation19, transformation20,
    transformation21, transformation22, transformation23, transformation24, transformation25,
    transformation26, transformation27, transformation28, transformation29, transformation30,
    transformation31, transformation32, transformation33, transformation34, transformation35,
    transformation36, transformation37, transformation38, transformation39,
    transformation42, transformation43, transformation44, transformation45,
    transformation46, transformation47, transformation48, transformation49,
    transformation50, transformation51,
    transformation52, transformation53, transformation54,
]

const members = [
    member1, member2, member3, member4, member5,
    member6, member7, member8, member9, member10,
    member11, member12, member13, member14, member15,
    member16, member17, member18, member19, member20,
    member21, member22, member23, member24, member25,
    member26, member27, member28, member29, member30,
    member31, member32, member33, member34, member35,
    member36, member37, member38, member39, member40,
    member41, member42,
    member43, member44, member45, member46, member47,
    member48, member49, member50,
]

const quotes = [
    '"Weer met een lach in de spiegel kijken"',
    '"Sterker dan je ooit voor mogelijk hield"',
    '"Geen excuses meer, alleen resultaten"',
    '"Dit is pas het begin van jouw verhaal"',
    '"Jouw lichaam kan meer dan je denkt"',
    '"Elke stap telt, elke kilo vertelt"',
    '"Vandaag begin je, morgen ben je trots"',
    '"De beste investering is in jezelf"',
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

    const hero = useScrollReveal()
    const grid1 = useScrollReveal()
    const q1 = useScrollReveal()
    const memberGrid1 = useScrollReveal()
    const q2 = useScrollReveal()
    const grid2 = useScrollReveal()
    const q3 = useScrollReveal()
    const memberGrid2 = useScrollReveal()
    const q4 = useScrollReveal()
    const grid3 = useScrollReveal()
    const q5 = useScrollReveal()
    const memberGrid3 = useScrollReveal()
    const q6 = useScrollReveal()
    const grid4 = useScrollReveal()
    const q7 = useScrollReveal()
    const memberGrid4 = useScrollReveal()
    const q8 = useScrollReveal()
    const grid5 = useScrollReveal()
    const q9 = useScrollReveal()
    const memberGrid5 = useScrollReveal()

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
                <div ref={hero.ref} className="container relative z-10 px-4">
                    <div className={`mx-auto max-w-4xl text-center transition-all duration-700 ${hero.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Bewezen Resultaten</p>
                        <h1 className="section-title mb-6">
                            <span className="text-primary">1000+</span> Levens Veranderd
                        </h1>
                        <p className="section-subtitle mx-auto">
                            Onze klanten spreken voor zich. Bekijk de transformaties en laat je inspireren om zelf de eerste stap te zetten.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className={`mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 transition-all delay-300 duration-700 md:grid-cols-4 md:gap-6 ${hero.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
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
                    <PhotoGrid photos={transformations.slice(0, 10)} isVisible={grid1.isVisible} refProp={grid1.ref} />
                </div>
            </section>

            {/* Quote 1 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[0]} isVisible={q1.isVisible} refProp={q1.ref} />
                </div>
            </section>

            {/* Block 2: Leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(0, 10)} isVisible={memberGrid1.isVisible} refProp={memberGrid1.ref} />
                </div>
            </section>

            {/* Quote 2 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[1]} isVisible={q2.isVisible} refProp={q2.ref} />
                </div>
            </section>

            {/* Block 3: Voor & Na */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <PhotoGrid photos={transformations.slice(10, 20)} isVisible={grid2.isVisible} refProp={grid2.ref} />
                </div>
            </section>

            {/* Quote 3 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[2]} isVisible={q3.isVisible} refProp={q3.ref} />
                </div>
            </section>

            {/* Block 4: Leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(10, 22)} isVisible={memberGrid2.isVisible} refProp={memberGrid2.ref} />
                </div>
            </section>

            {/* Quote 4 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[3]} isVisible={q4.isVisible} refProp={q4.ref} />
                </div>
            </section>

            {/* Block 5: Voor & Na */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <PhotoGrid photos={transformations.slice(20, 30)} isVisible={grid3.isVisible} refProp={grid3.ref} />
                </div>
            </section>

            {/* Quote 5 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[4]} isVisible={q5.isVisible} refProp={q5.ref} />
                </div>
            </section>

            {/* Block 6: Leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(22, 32)} isVisible={memberGrid3.isVisible} refProp={memberGrid3.ref} />
                </div>
            </section>

            {/* Quote 6 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[5]} isVisible={q6.isVisible} refProp={q6.ref} />
                </div>
            </section>

            {/* Block 7: Voor & Na */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <PhotoGrid photos={transformations.slice(30, 40)} isVisible={grid4.isVisible} refProp={grid4.ref} />
                </div>
            </section>

            {/* Quote 7 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[6]} isVisible={q7.isVisible} refProp={q7.ref} />
                </div>
            </section>

            {/* Block 8: Leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(32, 42)} isVisible={memberGrid4.isVisible} refProp={memberGrid4.ref} />
                </div>
            </section>

            {/* Quote 8 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote={quotes[7]} isVisible={q8.isVisible} refProp={q8.ref} />
                </div>
            </section>

            {/* Block 9: Voor & Na */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <PhotoGrid photos={transformations.slice(40)} isVisible={grid5.isVisible} refProp={grid5.ref} />
                </div>
            </section>

            {/* Quote 9 */}
            <section className="bg-background">
                <div className="container px-4">
                    <QuoteBanner quote='"Samen sterker, samen verder"' isVisible={q9.isVisible} refProp={q9.ref} />
                </div>
            </section>

            {/* Block 10: Nieuwe leden met schijf */}
            <section className="bg-card py-10 md:py-14">
                <div className="container px-4">
                    <MemberGrid photos={members.slice(42)} isVisible={memberGrid5.isVisible} refProp={memberGrid5.ref} />
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
