import { useEffect, useRef, useState } from 'react'
import atmosphere1 from '@/assets/atmosphere-1.jpg'
import atmosphere2 from '@/assets/atmosphere-2.jpg'
import atmosphere3 from '@/assets/atmosphere-3.jpg'
import atmosphere4 from '@/assets/atmosphere-4.jpg'
import atmosphere5 from '@/assets/atmosphere-5.jpg'
import atmosphere6 from '@/assets/atmosphere-6.jpg'
import atmosphere7 from '@/assets/atmosphere-7.jpg'
import atmosphere8 from '@/assets/atmosphere-8.jpg'

const atmosphereImages = [
    { src: atmosphere1, alt: 'Persoonlijk intakegesprek met trainer' },
    { src: atmosphere2, alt: 'Trainer bespreekt voortgang met klant' },
    { src: atmosphere3, alt: 'Lichaamsanalyse meting' },
    { src: atmosphere4, alt: 'Personal training groepssessie' },
    { src: atmosphere5, alt: 'Trainer begeleidt oefening' },
    { src: atmosphere6, alt: 'Kracht training met begeleiding' },
    { src: atmosphere7, alt: 'Battle ropes training' },
    { src: atmosphere8, alt: 'Machine training met coach' },
]

export default function AtmosphereSection() {
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
        <section ref={sectionRef} className="overflow-hidden bg-background py-20 md:py-32">
            <div className="container mx-auto mb-12 px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">De WE ARE Ervaring</p>
                    <h2 className="section-title mb-6">
                        Train in een <span className="text-primary">Inspirerende</span> Omgeving
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Bij WE ARE draait alles om persoonlijke aandacht, professionele begeleiding en een motiverende sfeer. Bekijk hoe onze trainers elke dag
                        het beste uit onze leden halen.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '0ms' }}
                        >
                            <div className="aspect-[3/4]">
                                <img
                                    src={atmosphereImages[0].src}
                                    alt={atmosphereImages[0].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '100ms' }}
                        >
                            <div className="aspect-square">
                                <img
                                    src={atmosphereImages[1].src}
                                    alt={atmosphereImages[1].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '150ms' }}
                        >
                            <div className="aspect-square">
                                <img
                                    src={atmosphereImages[2].src}
                                    alt={atmosphereImages[2].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '250ms' }}
                        >
                            <div className="aspect-[3/4]">
                                <img
                                    src={atmosphereImages[3].src}
                                    alt={atmosphereImages[3].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            <div className="aspect-[3/4]">
                                <img
                                    src={atmosphereImages[4].src}
                                    alt={atmosphereImages[4].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <div className="aspect-square">
                                <img
                                    src={atmosphereImages[5].src}
                                    alt={atmosphereImages[5].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '450ms' }}
                        >
                            <div className="aspect-square">
                                <img
                                    src={atmosphereImages[6].src}
                                    alt={atmosphereImages[6].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                        <div
                            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: '550ms' }}
                        >
                            <div className="aspect-[3/4]">
                                <img
                                    src={atmosphereImages[7].src}
                                    alt={atmosphereImages[7].alt}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
