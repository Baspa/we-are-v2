import { Check, ArrowRight, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const transformationBenefits = [
    'Weer met een lach in de spiegel kijken',
    'Met trots leuke kleding kunnen dragen',
    'Zonder schaamte over het strand lopen',
    'Weer een fitte papa of mama zijn',
    'Meer zelfvertrouwen in jezelf',
    'Geen jojo-effect maar duurzame resultaten',
]

export default function TransformationSection() {
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
        <section ref={sectionRef} id="programma" className="bg-card py-20 md:py-32">
            <div className="container px-4">
                <div className="mx-auto max-w-2xl">
                    <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <Zap className="h-4 w-4" />
                            De Transformatie Formule
                        </div>

                        <h2 className="section-title mb-6">
                            De Transformatie Formule: <span className="text-primary">structuur & effectief bewezen</span>
                        </h2>

                        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                            Met De Transformatie Formule bereik je resultaten die je nooit voor mogelijk had gehouden. Fysiek en mentaal sterker, met blijvende
                            resultaten.
                        </p>

                        <ul className="mb-10 space-y-4">
                            {transformationBenefits.map((benefit, index) => (
                                <li
                                    key={benefit}
                                    className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                                >
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                                        <Check className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                    <span className="text-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#contact" className="btn-hero group inline-flex items-center gap-2">
                            Ja, ik wil dit ook!
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
