import { Link } from '@inertiajs/react'
import { ArrowRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (isDismissed || !isVisible) {
return null
}

    return (
        <div className="animate-fade-in-up fixed bottom-0 right-0 left-0 z-50 border-t border-border bg-background/95 p-4 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="hidden sm:block">
                        <p className="font-semibold text-foreground">Klaar voor jouw transformatie?</p>
                        <p className="text-sm text-muted-foreground">Plan vandaag nog je gratis kennismaking.</p>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-3 sm:flex-none">
                        <Link href="/test" className="btn-hero pulse-glow flex items-center gap-2 py-3 px-6 text-sm">
                            <span className="hidden sm:inline">Zijn we een match? Doe de test!</span>
                            <span className="sm:hidden">Doe de test!</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="Sluiten"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
