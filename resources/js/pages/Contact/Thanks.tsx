import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/layouts/MainLayout'
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react'

export default function Thanks() {
    return (
        <MainLayout showStickyCTA={false}>
            <Head title="Bedankt voor je aanvraag | WE ARE Personal Training">
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <section className="flex min-h-screen items-center justify-center px-4 pt-20">
                <div className="mx-auto max-w-xl text-center">
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-12 w-12 text-primary" />
                    </div>

                    <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">Bedankt!</h1>

                    <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                        We hebben je aanvraag voor een gratis kennismaking ontvangen. Een van onze trainers neemt binnen{' '}
                        <strong className="text-foreground">24 uur</strong> contact met je op.
                    </p>

                    <div className="mb-8 rounded-xl border border-border bg-card p-6">
                        <p className="mb-4 text-muted-foreground">Mocht dit niet zijn gebeurd, bel ons dan gerust:</p>
                        <a href="tel:+31636123542" className="inline-flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:underline">
                            <Phone className="h-5 w-5" />
                            +31 6 36 12 35 42
                        </a>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/" className="btn-hero inline-flex items-center gap-2">
                            Terug naar home
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link href="/resultaten" className="btn-outline-hero inline-flex items-center gap-2">
                            Bekijk resultaten
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
