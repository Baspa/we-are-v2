import { Link } from '@inertiajs/react'
import { Menu, X, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import logoIcon from '@/assets/logo-icon.png'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/waarom', label: 'Waarom WE ARE' },
        { href: '/resultaten', label: 'Resultaten' },
        { href: '/transformatieformule', label: 'De Transformatie Formule' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-border bg-background/95 backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2">
                        <img src={logoIcon} alt="WE ARE Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="nav-link underline-animated">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-4 lg:flex">
                        <a href="tel:+31636123542" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                            <Phone className="h-4 w-4" />
                            <span className="text-sm">+31 6 36 12 35 42</span>
                        </a>
                        <Link href="/test" className="btn-hero py-2.5 px-5 text-sm">
                            Zijn we een match? Doe de test!
                        </Link>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground lg:hidden" aria-label="Toggle menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="animate-fade-in-up absolute top-20 right-0 left-0 border-b border-border bg-background lg:hidden">
                        <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="nav-link py-2 text-lg" onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/test" className="btn-hero mt-4 text-center" onClick={() => setIsOpen(false)}>
                                Zijn we een match? Doe de test!
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
