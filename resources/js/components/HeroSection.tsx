import { Link } from '@inertiajs/react'
import { Users, TrendingDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroGym from '@/assets/hero-gym.jpg'
import logoFull from '@/assets/logo-full-white.png'

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img src={heroGym} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-background/85 via-background/70 to-background" />
            </div>

            <div className="container relative z-10 px-4 pt-32 pb-20">
                <div className="mx-auto max-w-4xl text-center">
                    <p
                        className={`mb-6 text-xs font-medium uppercase tracking-[0.2em] text-primary transition-all duration-700 md:text-sm ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        Personal Training Uden & Schijndel
                    </p>

                    <div
                        className={`mb-8 transition-all delay-200 duration-700 ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}`}
                    >
                        <img src={logoFull} alt="WE ARE - Your Physical and Mental Personal Training" className="mx-auto h-24 w-auto md:h-32 lg:h-40" />
                    </div>

                    <h1
                        className={`mb-6 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] transition-all delay-300 duration-700 md:text-7xl lg:text-8xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <span className="block text-foreground">Jouw</span>
                        <span className="block text-primary">Transformatie</span>
                        <span className="block text-3xl font-light tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl">Binnen 12 Weken</span>
                    </h1>
                    <p className="sr-only">
                        Personal Training in Uden en Schijndel — De Transformatie Formule van WE ARE Personal Training helpt je afvallen en transformeren met
                        persoonlijke begeleiding en 100% resultaat garantie.
                    </p>

                    <p
                        className={`mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-muted-foreground transition-all delay-400 duration-700 md:text-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        Ontdek De Transformatie Formule waarmee al meer dan <strong className="font-medium text-foreground">1000+ mensen</strong> hun fysieke
                        en mentale transformatie hebben bereikt. <strong className="font-medium text-foreground">Resultaat gegarandeerd.</strong>
                    </p>

                    <div
                        className={`mb-12 flex justify-center transition-all delay-500 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <a href="#resultaten" className="btn-outline-hero flex items-center justify-center gap-2">
                            Bekijk Resultaten
                        </a>
                    </div>

                    <div
                        className={`mx-auto grid max-w-xl grid-cols-3 gap-8 transition-all delay-600 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <div className="text-center">
                            <div className="mb-1 flex items-center justify-center gap-1">
                                <TrendingDown className="h-5 w-5 text-primary" />
                                <span className="font-display text-2xl text-foreground md:text-3xl">12-25kg</span>
                            </div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">Gemiddeld Verlies</p>
                        </div>
                        <div className="border-x border-border text-center">
                            <div className="mb-1 flex items-center justify-center gap-1">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="font-display text-3xl text-foreground md:text-4xl">1000+</span>
                            </div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">Transformaties</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-1 flex items-center justify-center">
                                <span className="font-display text-3xl text-primary md:text-4xl">100%</span>
                            </div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">Resultaat Garantie</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="animate-float absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground pt-2">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </div>
            </div>
        </section>
    )
}
