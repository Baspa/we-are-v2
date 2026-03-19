import { Link } from '@inertiajs/react'
import { Trophy, Wrench, FlaskConical, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const benefits = [
    {
        icon: Trophy,
        title: 'Resultaat Gegarandeerd',
        description: 'Geen resultaat? Dan krijg je je investering terug. Zo zeker zijn wij van onze aanpak.',
    },
    {
        icon: Wrench,
        title: 'Exclusief Onderhoudsprogramma',
        description: 'Na je traject blijf je welkom met ons unieke nazorgprogramma. Geen jojo-effect, maar blijvend resultaat.',
    },
    {
        icon: FlaskConical,
        title: 'Bewezen Methodiek',
        description:
            'Met meer dan 10 jaar ervaring is onze Transformatie Formule gebaseerd op 1000+ succesvolle transformaties en wetenschappelijk onderbouwd.',
    },
    {
        icon: MapPin,
        title: 'Uniek in Jouw Omgeving',
        description: 'Geen losse trainingen. Wel structuur, focus en een vast traject.',
    },
]

export default function BenefitsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

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

    return (
        <section ref={sectionRef} id="waarom" className="bg-background py-20 md:py-32">
            <div className="container px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Waarom WE ARE</p>
                    <h2 className="section-title mb-6">
                        De <span className="text-primary">Nieuwe Standaard</span> in Personal Training Uden & Schijndel
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Bij WE ARE draait alles om jouw succes. Onze unieke aanpak combineert fysieke training met mentale coaching voor duurzame resultaten.
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className={`testimonial-card card-hover transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                                <benefit.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="mb-3 font-display text-2xl">{benefit.title}</h3>
                            <p className="leading-relaxed text-muted-foreground">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div
                    className={`mt-12 text-center transition-all delay-500 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                    <Link href="/test" className="btn-hero inline-flex items-center gap-2">
                        Een match? Doe de test!
                    </Link>
                </div>
            </div>
        </section>
    )
}
