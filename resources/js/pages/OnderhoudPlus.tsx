import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Dumbbell, MessageSquare, Users } from 'lucide-react'

import MainLayout from '@/layouts/MainLayout'

export default function OnderhoudPlus() {
    const handleAanmelden = () => {
        const subject = encodeURIComponent('Onderhoud+ aanmelding')
        const body = encodeURIComponent('Ik wil graag hierover gebeld worden.')
        window.location.href = `mailto:brayen@we-are.club?subject=${subject}&body=${body}`
    }

    return (
        <MainLayout>
            <Head title="Onderhoud+ | WE ARE Personal Training">
                <meta
                    name="description"
                    content="Onderhoud+ van WE ARE Personal Training. Begeleide krachttraining in kleine groepen. Dichter bij het vuur, sneller anticiperen, meer resultaat."
                />
            </Head>

            <main className="min-h-screen bg-background text-foreground">
                {/* Hero */}
                <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background" />
                    <div className="container relative z-10 mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl"
                        >
                            <span className="mb-6 inline-block rounded-sm bg-secondary px-4 py-1 text-sm font-bold uppercase tracking-wider text-secondary-foreground">
                                Onderhoud+
                            </span>
                            <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-6xl lg:text-7xl">
                                Niet aanmodderen.{' '}
                                <span className="text-primary">Doorpakken.</span>
                            </h1>
                            <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
                                Voor wie te weinig heeft aan zelfstandig onderhoud, maar niet full
                                premium wil gaan.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="mb-8 inline-flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/20 px-5 py-3 text-destructive"
                            >
                                <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                                <span className="text-sm font-bold md:text-base">
                                    Slechts 20 plekken beschikbaar — Vol = Vol
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* USP banner */}
                <section className="border-y border-secondary/30 bg-secondary/20 py-4">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-sm font-bold uppercase tracking-wide text-secondary-foreground md:text-base">
                            Dichter bij het vuur. Sneller anticiperen. Meer resultaat.
                        </p>
                    </div>
                </section>

                {/* Video */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">
                                Bekijk wat Onderhoud+{' '}
                                <span className="text-primary">voor jou betekent</span>
                            </h2>
                            <div className="overflow-hidden rounded-lg border border-border">
                                <video controls className="aspect-video w-full" poster="">
                                    <source
                                        src="https://we-are.ams3.digitaloceanspaces.com/onderhoud-plus-intro.mp4"
                                        type="video/mp4"
                                    />
                                    Je browser ondersteunt geen video.
                                </video>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Kenmerken */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Dumbbell,
                                    title: '1 tot 2x',
                                    desc: 'begeleide krachttraining',
                                },
                                { icon: MessageSquare, title: '2 check-ins', desc: 'per maand' },
                                { icon: Users, title: 'Max. 4', desc: 'personen per groep' },
                                { icon: Clock, title: '1 groepscheck', desc: 'per maand' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-lg border border-border bg-card p-6 text-center"
                                >
                                    <item.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                                    <h3 className="text-xl font-extrabold text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Small group banner */}
                <section className="border-y border-border bg-card py-4">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-sm font-bold uppercase tracking-wide md:text-base">
                            Kleine groep. Meer aandacht. Sneller resultaat.
                        </p>
                    </div>
                </section>

                {/* Prijzen */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
                            Investering
                        </h2>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
                            {[
                                { freq: '1x per week', price: '€175', note: 'per cyclus' },
                                { freq: '2x per week', price: '€325', note: 'per cyclus' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="rounded-lg border border-primary/30 bg-card p-8 text-center"
                                >
                                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                        {item.freq}
                                    </p>
                                    <p className="mb-1 text-5xl font-extrabold text-primary">
                                        {item.price}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{item.note}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-6 text-center text-xs text-muted-foreground">
                            * Inclusief onbeperkt groepslessen en zelfstandig sporten.
                        </p>
                    </div>
                </section>

                {/* FOMO + CTA */}
                <section className="bg-gradient-to-t from-secondary/20 to-background py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mx-auto max-w-xl"
                        >
                            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Vol = Vol</h2>
                            <p className="mb-2 text-lg text-muted-foreground">
                                Instroom is beperkt. Claim nu je plek in Onderhoud+ voordat deze{' '}
                                <span className="font-bold text-primary">20 plekken</span> weg
                                zijn.
                            </p>
                            <p className="mb-8 text-muted-foreground">
                                Wacht niet te lang — als de plekken vol zijn, is het vol.
                            </p>
                            <button
                                onClick={handleAanmelden}
                                className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Nu aanmelden
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}
