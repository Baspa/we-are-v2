import { Link } from '@inertiajs/react'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import logoFull from '@/assets/logo-full-white.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border bg-card">
            <div className="container px-4 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <img src={logoFull} alt="WE ARE - Your Physical and Mental Personal Training" className="h-16 w-auto" />
                        </div>
                        <p className="mb-6 max-w-md text-muted-foreground">
                            WE ARE – your physical and mental personal training is de nieuwe standaard in personal training. Op onze locaties in Uden en Schijndel
                            maken we dromen waar.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/weare_personaltraining"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://facebook.com/weare.personaltraining"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-6 font-display text-xl">Pagina&apos;s</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/waarom" className="text-muted-foreground transition-colors hover:text-primary">
                                    Waarom WE ARE
                                </Link>
                            </li>
                            <li>
                                <Link href="/resultaten" className="text-muted-foreground transition-colors hover:text-primary">
                                    Resultaten
                                </Link>
                            </li>
                            <li>
                                <Link href="/transformatieformule" className="text-muted-foreground transition-colors hover:text-primary">
                                    De Transformatie Formule
                                </Link>
                            </li>
                            <li>
                                <Link href="/locatie-uden" className="text-muted-foreground transition-colors hover:text-primary">
                                    Personal Training Uden
                                </Link>
                            </li>
                            <li>
                                <Link href="/locatie-schijndel" className="text-muted-foreground transition-colors hover:text-primary">
                                    Personal Training Schijndel
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-primary">
                                    Veelgestelde Vragen
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 font-display text-xl">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <a href="tel:+31636123542" className="text-muted-foreground transition-colors hover:text-primary">
                                    +31 6 36 12 35 42
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <a href="mailto:info@we-are.club" className="text-muted-foreground transition-colors hover:text-primary">
                                    info@we-are.club
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <div className="text-sm text-muted-foreground">
                                    <p>Vluchtoord 42a, 5406 XP Uden</p>
                                    <p>Spoorlaan 18D, 5481 SK Schijndel</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">&copy; {currentYear} WE ARE. Alle rechten voorbehouden.</p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <span>KvK Uden: 83938141</span>
                        <span>KvK Schijndel: 84447532</span>
                        <span>BTW: NL863041346B01</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
