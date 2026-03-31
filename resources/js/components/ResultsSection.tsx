import { Link } from '@inertiajs/react'
import { ArrowRight, TrendingUp, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import transformation1 from '@/assets/transformation-1.jpg'
import transformation10 from '@/assets/transformation-10.png'
import transformation2 from '@/assets/transformation-2.jpg'
import transformation3 from '@/assets/transformation-3.jpg'
import transformation31 from '@/assets/transformation-31.jpg'
import transformation32 from '@/assets/transformation-32.jpg'
import transformation33 from '@/assets/transformation-33.jpg'
import transformation34 from '@/assets/transformation-34.jpg'
import transformation35 from '@/assets/transformation-35.jpg'
import transformation36 from '@/assets/transformation-36.png'
import transformation4 from '@/assets/transformation-4.png'
import transformation40 from '@/assets/transformation-40.jpg'
import transformation41 from '@/assets/transformation-41.png'
import transformation5 from '@/assets/transformation-5.jpg'
import transformation6 from '@/assets/transformation-6.jpg'
import transformation7 from '@/assets/transformation-7.jpg'
import transformation8 from '@/assets/transformation-8.jpg'
import transformation9 from '@/assets/transformation-9.png'

const transformations = [
    { id: 1, image: transformation1 },
    { id: 31, image: transformation31 },
    { id: 2, image: transformation2 },
    { id: 33, image: transformation33 },
    { id: 3, image: transformation3 },
    { id: 40, image: transformation40 },
    { id: 34, image: transformation34 },
    { id: 4, image: transformation4 },
    { id: 35, image: transformation35 },
    { id: 5, image: transformation5 },
    { id: 41, image: transformation41 },
    { id: 32, image: transformation32 },
    { id: 6, image: transformation6 },
    { id: 36, image: transformation36 },
    { id: 7, image: transformation7 },
    { id: 8, image: transformation8 },
    { id: 9, image: transformation9 },
    { id: 10, image: transformation10 },
]

export default function ResultsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

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

    const visibleCount = isMobile ? 2 : 4
    const maxIndex = transformations.length - visibleCount

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    return (
        <section ref={sectionRef} id="resultaten" className="bg-card py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Bewezen Resultaten</p>
                    <h2 className="section-title mb-6">
                        <span className="text-primary">1000+</span> Transformaties in Uden & Schijndel
                    </h2>
                </div>

                <div className="relative mb-12">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 md:-translate-x-6"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className="absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 md:translate-x-6"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <div className="mx-4 overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                        >
                            {transformations.map((transformation, index) => (
                                <div
                                    key={transformation.id}
                                    className={`shrink-0 px-2 transition-all duration-500 md:px-3 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                                    style={{
                                        width: `${100 / visibleCount}%`,
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="group relative aspect-square overflow-hidden rounded-xl bg-muted">
                                        <img
                                            src={transformation.image}
                                            alt={`Personal Training transformatie resultaat ${transformation.id} - WE ARE Uden & Schijndel`}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'w-6 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className={`mb-12 grid grid-cols-2 gap-4 transition-all delay-500 duration-700 md:grid-cols-4 md:gap-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                    <div className="rounded-xl border border-border bg-background p-4 text-center md:p-6">
                        <div className="mb-2 flex items-center justify-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary md:h-6 md:w-6" />
                            <span className="font-display text-2xl text-foreground md:text-4xl">100%</span>
                        </div>
                        <p className="whitespace-nowrap text-xs text-muted-foreground md:text-sm">100% resultaat garantie</p>
                    </div>
                    <div className="rounded-xl border border-border bg-background p-4 text-center md:p-6">
                        <div className="mb-2 font-display text-2xl text-primary md:text-4xl">-12 t/m 25kg</div>
                        <p className="text-xs text-muted-foreground md:text-sm">Gemiddeld resultaat</p>
                    </div>
                    <div className="rounded-xl border border-border bg-background p-4 text-center md:p-6">
                        <div className="mb-2 font-display text-2xl text-foreground md:text-4xl">12</div>
                        <p className="text-xs text-muted-foreground md:text-sm">Weken programma</p>
                    </div>
                    <div className="rounded-xl border border-border bg-background p-4 text-center md:p-6">
                        <div className="mb-2 flex items-center justify-center gap-2">
                            <Star className="h-5 w-5 fill-primary text-primary md:h-6 md:w-6" />
                            <span className="font-display text-2xl text-foreground md:text-4xl">5/5</span>
                        </div>
                        <p className="whitespace-nowrap text-xs text-muted-foreground md:text-sm">Op basis van 261 Google reviews</p>
                    </div>
                </div>

                <div
                    className={`text-center transition-all delay-700 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                    <p className="mb-6 text-muted-foreground">
                        Dit kan ook <strong className="text-foreground">jouw</strong> transformatie zijn.
                    </p>
                    <Link href="/resultaten" className="btn-hero group inline-flex items-center gap-2">
                        Bekijk alle topresultaten
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
