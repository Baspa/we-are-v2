import { Link } from '@inertiajs/react'
import { MapPin, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import gym3 from '@/assets/gym-3.jpg'
import gymUden from '@/assets/gym-uden.jpg'

const locations = [
    {
        name: 'Uden',
        address: 'Vluchtoord 42a, 5406 XP Uden',
        image: gymUden,
        href: '/locatie-uden',
    },
    {
        name: 'Schijndel',
        address: 'Spoorlaan 18D, 5481 SK Schijndel',
        image: gym3,
        href: '/locatie-schijndel',
    },
]

export default function LocationsSection() {
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
        <section ref={sectionRef} className="bg-card py-20 md:py-32">
            <div className="container px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Onze Locaties</p>
                    <h2 className="section-title mb-6">
                        <span className="text-primary">Wherever</span> You Need Us
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Ons team van specialistische Personal Trainers staat voor je klaar in Uden en Schijndel! Gediplomeerde trainers die het uiterste uit
                        jouw avontuur halen.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    {locations.map((location, index) => (
                        <div
                            key={location.name}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={location.image}
                                    alt={`Personal Training ${location.name}`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                            <div className="absolute right-0 bottom-0 left-0 p-6">
                                <h3 className="mb-2 font-display text-3xl">Locatie {location.name}</h3>
                                <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    <span className="text-sm">{location.address}</span>
                                </div>
                                <Link href={location.href} className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
                                    Neem een kijkje!
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
