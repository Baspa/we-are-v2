import useEmblaCarousel from 'embla-carousel-react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'

import video15Kilo from '@/assets/testimonial-15kilo.mp4'
import videoJeroen from '@/assets/testimonial-jeroen.mp4'
import videoJojanneke from '@/assets/testimonial-jojanneke.mp4'
import videoTonny from '@/assets/testimonial-tonny.mp4'

const videoTestimonials = [
    { name: 'Jojanneke', video: videoJojanneke, subtitle: '13 Kilo Kwijt in 12 Weken' },
    { name: 'Tonny', video: videoTonny, subtitle: 'Van 20 Kilo Overgewicht naar Energiek' },
    { name: 'Jeroen', video: videoJeroen, subtitle: 'Super Trots op de Resultaten' },
    { name: 'Transformatie', video: video15Kilo, subtitle: '15 Kilo Afvallen' },
]

const testimonials = [
    {
        name: 'Sanne de Vries',
        text: 'Ik ben ontzettend blij dat ik de stap heb gezet bij WE ARE. In 12 weken tijd heb ik niet alleen 14 kilo verloren, maar vooral mijn zelfvertrouwen teruggekregen. Het team is oprecht betrokken en de begeleiding is top!',
        rating: 5,
    },
    {
        name: 'Rick Janssen',
        text: 'De beste investering die ik ooit heb gedaan. Het gaat niet alleen om het afvallen, maar ze leren je ook echt hoe je het volhoudt. De mentale begeleiding maakt WE ARE uniek. Ik raad het iedereen aan!',
        rating: 5,
    },
    {
        name: 'Marieke van Hout',
        text: 'Na mijn zwangerschap wilde ik weer fit worden, maar wist niet waar ik moest beginnen. Bij WE ARE voelde ik me meteen welkom. Ze snappen precies waar je staat en halen het maximale uit je. Resultaat: fitter dan ooit!',
        rating: 5,
    },
]

function VideoCarousel({ items, isVisible }: { items: typeof videoTestimonials; isVisible: boolean }) {
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
        <div className={`relative mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
                <div className="flex gap-4 md:gap-6">
                    {items.map((item) => (
                        <div key={item.name} className="min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_calc(33.333%-16px)]">
                            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                                <video className="aspect-[9/16] w-full object-cover" controls preload="metadata" playsInline>
                                    <source src={item.video} type="video/mp4" />
                                    Je browser ondersteunt geen video.
                                </video>
                                <div className="pointer-events-none absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-4">
                                    <p className="text-lg font-bold text-white">{item.name}</p>
                                    <p className="text-sm text-white/80">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className={`absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-opacity ${canScrollPrev ? 'opacity-100' : 'opacity-30'}`}
            >
                <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
                onClick={() => emblaApi?.scrollNext()}
                className={`absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-opacity ${canScrollNext ? 'opacity-100' : 'opacity-30'}`}
            >
                <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
        </div>
    )
}

export default function TestimonialsSection() {
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
        <section ref={sectionRef} id="verhalen" className="bg-background py-20 md:py-32">
            <div className="container px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Succesverhalen</p>
                    <h2 className="section-title mb-6">
                        Luister naar <span className="text-primary">Hun Verhaal</span>
                    </h2>
                    <p className="section-subtitle mx-auto">Echte mensen, echte resultaten. Ontdek hoe onze leden hun leven hebben veranderd met WE ARE.</p>
                </div>

                <VideoCarousel items={videoTestimonials} isVisible={isVisible} />

                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="text-muted-foreground">
                        Of lees wat onze leden zeggen op <strong className="text-foreground">Google</strong>:
                    </p>
                </div>

                <div className="mb-16 grid gap-6 md:grid-cols-3 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`testimonial-card relative transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                            <div className="mb-4 flex items-center gap-3">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                <div className="flex gap-0.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                            </div>

                            <p className="mb-6 leading-relaxed text-muted-foreground">&quot;{testimonial.text}&quot;</p>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                    <span className="text-sm font-semibold text-foreground">
                                        {testimonial.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">Google Review</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center transition-all delay-500 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card px-6 py-3">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                        </div>
                        <span className="font-medium text-foreground">5.0/5 op basis van 261 Google reviews</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
