import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'
import {
    Award,
    Brain,
    CheckCircle,
    Clock,
    Dumbbell,
    Flame,
    Heart,
    Lock,
    Shield,
    Star,
    Target,
    TrendingUp,
    Users,
    Zap,
} from 'lucide-react'

import brayenImg from '@/assets/brayen-intake.webp'
import intakeTeam1 from '@/assets/intake-team-1.webp'
import intakeTeam2 from '@/assets/intake-team-2.webp'
import intakeTeam3 from '@/assets/intake-team-3.webp'
import intakeTeam4 from '@/assets/intake-team-4.webp'
import intakeTeam5 from '@/assets/intake-team-5.webp'
import intakeTeam6 from '@/assets/intake-team-6.webp'
import MainLayout from '@/layouts/MainLayout'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 },
    }),
}

export default function Intake() {
    return (
        <MainLayout showNavigation={false} showFooter={false} showStickyCTA={false}>
            <Head title="Voorbereiding Intakegesprek | De Transformatie Formule®">
                <meta
                    name="description"
                    content="Bereid je voor op jouw intakegesprek met Brayen. Ontdek alvast hoe De Transformatie Formule® werkt en wat je kunt verwachten."
                />
            </Head>

            <main className="min-h-screen bg-background text-foreground">
                {/* HERO */}
                <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
                    <div className="absolute top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

                    <div className="container relative z-10 mx-auto max-w-4xl px-4">
                        <div className="flex flex-col items-center gap-10 md:flex-row">
                            <motion.div
                                className="flex-1 text-center md:text-left"
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                custom={0}
                            >
                                <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                    <Shield className="h-4 w-4" />
                                    Voorbereiding intakegesprek
                                </span>

                                <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                                    Goed dat je er bent.
                                    <br />
                                    <span className="text-primary">Dit is jouw eerste stap.</span>
                                </h1>

                                <p className="mb-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
                                    Je hebt een intakegesprek gepland — en dat is niet zomaar iets.
                                    Dat vraagt lef. Lees deze pagina door zodat je straks goed
                                    voorbereid aan tafel zit.
                                </p>
                                <p className="text-muted-foreground">
                                    Jouw intake is met{' '}
                                    <span className="font-semibold text-foreground">Brayen</span> —
                                    een topcoach die al meer dan 6 jaar werkzaam is binnen WE ARE en
                                    de persoon die jouw traject persoonlijk begeleidt.
                                </p>
                            </motion.div>

                            <motion.div
                                className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 md:h-80 md:w-80"
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                custom={2}
                            >
                                <img
                                    src={brayenImg}
                                    alt="Brayen - ervaren coach WE ARE"
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WIE ZIJN WIJ */}
                <section className="bg-card py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                This is who <span className="text-primary">WE ARE</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
                                WE ARE helpt mensen niet alleen fysiek veranderen, maar vooral weer{' '}
                                <span className="font-semibold text-foreground">grip krijgen</span>{' '}
                                op hoe ze zich voelen in hun lichaam en dagelijks leven.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    icon: Dumbbell,
                                    title: 'Physical Training',
                                    desc: 'Personal, Duo & Small Group training op maat.',
                                },
                                {
                                    icon: Brain,
                                    title: 'Mental Coaching',
                                    desc: 'Mindset-coaching die de echte verandering aandrijft.',
                                },
                                {
                                    icon: Heart,
                                    title: 'Community',
                                    desc: 'Trainen tussen gelijkgestemden die elkaar sterker maken.',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-xl border border-border bg-background p-6 text-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                >
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PIJNPUNTEN & OPLOSSING */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                Herken jij <span className="text-primary">dit?</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                De meeste mensen die bij ons komen, worstelen met exact dezelfde
                                dingen.
                            </p>
                        </motion.div>

                        <div className="mb-14 grid gap-6 md:grid-cols-2">
                            {[
                                {
                                    title: 'Drukke agenda, geen tijd voor sport',
                                    desc: 'Je carrière en privéleven slokken al je energie op. Sporten schuif je steeds op — en het schuldgevoel groeit.',
                                },
                                {
                                    title: 'Geen balans tussen werk, privé en gezondheid',
                                    desc: 'Je functioneert, maar je leeft niet. Je weet dat het anders moet, maar je weet niet hoe.',
                                },
                                {
                                    title: 'Al van alles geprobeerd zonder resultaat',
                                    desc: 'Diëten, sportscholen, apps — niets lijkt te werken. Je motivatie is op en je vertrouwen ook.',
                                },
                                {
                                    title: 'Je voelt je niet meer lekker in je lichaam',
                                    desc: 'Je vermijdt de spiegel, koopt grotere kleding en zegt "nee" tegen uitjes omdat je je onzeker voelt.',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-xl border border-destructive/20 bg-destructive/5 p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i * 0.3}
                                >
                                    <h3 className="mb-2 text-base font-bold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h3 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl">
                                De Transformatie Formule<span className="text-primary">®</span> is
                                het antwoord.
                            </h3>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                Speciaal ontwikkeld voor drukke mensen die moeite hebben met de
                                balans tussen carrière, privé en sport. Geen uren in de sportschool
                                — maar een{' '}
                                <span className="font-semibold text-foreground">
                                    slim, efficiënt systeem
                                </span>{' '}
                                dat past in jouw leven.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* WAAROM DE TRANSFORMATIE FORMULE */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <Zap className="h-4 w-4" />
                                Het Systeem
                            </span>
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                De Transformatie Formule<span className="text-primary">®</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
                                Geen dieet. Geen quick fix. Een{' '}
                                <span className="font-semibold text-foreground">
                                    compleet systeem
                                </span>{' '}
                                in 4 fases, gericht op resultaat én blijvende verandering.
                            </p>
                        </motion.div>

                        <div className="mb-14 grid gap-8 md:grid-cols-2">
                            {[
                                {
                                    phase: 'Fase 1',
                                    title: 'Reset',
                                    desc: 'Doorbreek oude patronen en leg het fundament. Ons eetschema zorgt voor structuur.',
                                    icon: Flame,
                                    weeks: 'Week 1–4',
                                },
                                {
                                    phase: 'Fase 2',
                                    title: 'Rebuild',
                                    desc: 'Bouw aan kracht en spiermassa. 50/50 schema geeft je meer vrijheid.',
                                    icon: Target,
                                    weeks: 'Week 5–8',
                                },
                                {
                                    phase: 'Fase 3',
                                    title: 'Refine',
                                    desc: 'Focus op definitie en finishing touch. Je leert zelfstandig keuzes maken.',
                                    icon: Zap,
                                    weeks: 'Week 9–12',
                                },
                                {
                                    phase: 'Fase 4',
                                    title: 'Retain',
                                    desc: 'Resultaat behouden. Exclusief onderhoudsprogramma voor wie het verdient.',
                                    icon: Shield,
                                    weeks: 'Week 12+',
                                },
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-xl border border-border bg-card p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i * 0.5}
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <phase.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-primary">
                                                {phase.weeks}
                                            </span>
                                            <h3 className="text-lg font-bold text-foreground">
                                                {phase.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* 66 dagen gewoontevorming */}
                        <motion.div
                            className="rounded-xl border border-primary/20 bg-card p-8 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <p className="mb-3 text-2xl font-extrabold text-foreground md:text-3xl">
                                Het duurt gemiddeld{' '}
                                <span className="text-primary">66 dagen</span> om een nieuwe
                                gewoonte te vormen.
                            </p>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                De eerste 12 weken zijn cruciaal. Motivatie verdwijnt na 2–4 weken —
                                daarom heb je in die fase ons het hardst nodig. Wij zorgen dat
                                discipline het overneemt en gewoontes zich stevig wortelen.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* WAT VERANDERT ER IN 12 WEKEN */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                Dit is hoe jouw leven er over{' '}
                                <span className="text-primary">12 weken</span> uitziet
                            </h2>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {[
                                {
                                    title: 'Fysiek',
                                    icon: Dumbbell,
                                    items: [
                                        'Je voelt je fitter en sterker',
                                        'Je lichaam oogt strakker en energieker',
                                        'Kleding zit weer beter',
                                    ],
                                },
                                {
                                    title: 'Mentaal',
                                    icon: Brain,
                                    items: [
                                        'Meer discipline en rust in je hoofd',
                                        'Meer zelfvertrouwen in sociale situaties',
                                        'Geen schuldgevoel meer over voeding of uitstelgedrag',
                                    ],
                                },
                                {
                                    title: 'Dagelijks leven',
                                    icon: TrendingUp,
                                    items: [
                                        'Meer energie op werk en thuis',
                                        'Structuur in training en voeding',
                                        'Je weet exact wat werkt voor jouw lichaam',
                                    ],
                                },
                                {
                                    title: 'Op lange termijn',
                                    icon: Award,
                                    items: [
                                        'Geen jojo-effect',
                                        'Zelfstandig resultaat behouden',
                                        'Een nieuwe standaard voor jezelf',
                                    ],
                                },
                            ].map((block, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-xl border border-border bg-card p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i * 0.5}
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <block.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground">
                                            {block.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {block.items.map((item, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-3 text-foreground"
                                            >
                                                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WAAROM UNIEK */}
                <section className="bg-card py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                Waarom dit <span className="text-primary">anders</span> is
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                Een compleet all-in traject voor gegarandeerd resultaat.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: Brain,
                                    title: 'Gebouwd op gedragsverandering',
                                    desc: 'Niet alleen fysiek trainen, maar je gedrag en mindset fundamenteel veranderen.',
                                },
                                {
                                    icon: Target,
                                    title: 'Jouw unieke plan',
                                    desc: "Geen standaard schema's. Alles op maat voor jouw situatie, doelen en belastbaarheid.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: 'Sturing op data',
                                    desc: 'Wij meten alles: vetpercentage, spiermassa, kracht. Data liegt niet.',
                                },
                                {
                                    icon: CheckCircle,
                                    title: 'Voor iedereen haalbaar',
                                    desc: 'Als wij een match zien, garanderen wij dat het plan haalbaar is voor jouw agenda.',
                                },
                                {
                                    icon: Users,
                                    title: 'Community die begrijpt',
                                    desc: 'Trainen tussen gelijkgestemden in een veilige omgeving die motiveert.',
                                },
                                {
                                    icon: Lock,
                                    title: 'Exclusieve Retain fase',
                                    desc: 'Nazorgtraject om je resultaat voor altijd vast te houden na de transformatie.',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-xl border border-border bg-background p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i * 0.3}
                                >
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="mb-2 text-base font-bold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TARIEVEN */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <Award className="h-4 w-4" />
                                Investering
                            </span>
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                Jouw <span className="text-primary">investering</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                Twee instapopties die passen bij jouw situatie en budget.
                            </p>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <motion.div
                                className="relative rounded-xl border-2 border-primary/40 bg-card p-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={0}
                            >
                                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                                    Meest gekozen
                                </div>
                                <h3 className="mb-2 text-xl font-extrabold text-foreground">3 Termijnen</h3>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    12 weken intensieve begeleiding, betaal gespreid in 3 termijnen.
                                </p>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-primary">€445</span>
                                    <span className="text-lg text-muted-foreground"> / per vier weken</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Vanaf tarief — exacte investering bespreken we tijdens het intakegesprek.
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative rounded-xl border border-border bg-card p-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={1}
                            >
                                <h3 className="mb-2 text-xl font-extrabold text-foreground">Jaarprogramma</h3>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    12 weken intensieve training + 40 weken onderhoud. Een heel jaar begeleiding.
                                </p>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-primary">€175</span>
                                    <span className="text-lg text-muted-foreground"> / per vier weken</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Vanaf tarief — inclusief intensieve fase én onderhoudsprogramma.
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative rounded-xl border border-border bg-card p-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={2}
                            >
                                <h3 className="mb-2 text-xl font-extrabold text-foreground">Onderhoud</h3>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    Behoud je resultaat na de intensieve fase met ons onderhoudsprogramma.
                                </p>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-primary">€67,50</span>
                                    <span className="text-lg text-muted-foreground"> / per vier weken</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Vanaf tarief — beschikbaar na afronding van je transformatie.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={3}
                        >
                            <div className="mb-4 flex items-center justify-center gap-3">
                                <Shield className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-extrabold text-foreground">
                                    Resultaat garantie: geen risico&apos;s
                                </h3>
                            </div>
                            <p className="leading-relaxed text-muted-foreground">
                                Doe jij alles wat het plan je voorschrijft en behaal je 0,0 resultaat? Dan ontvang je je
                                geld terug.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* MEMBERS ONLY — RETAIN */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                            className="mb-14 text-center"
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <Lock className="h-4 w-4" />
                                Members Only
                            </div>
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                Na de transformatie:{' '}
                                <span className="text-primary">Retain</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                Blijvend resultaat vraagt om een omgeving die je scherp houdt. Dit
                                is jouw vervolgstap — exclusief voor WE ARE alumni.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Dumbbell,
                                    title: 'Flexibel trainen',
                                    desc: '05:00 – 23:00 · 365 dagen per jaar · Onbeperkt groepslessen',
                                },
                                {
                                    icon: Users,
                                    title: 'Rust & ruimte',
                                    desc: 'Maximaal 10 personen tegelijk in de gym voor optimale focus.',
                                },
                                {
                                    icon: Shield,
                                    title: 'Exclusief',
                                    desc: 'Alleen toegankelijk na de transformatie. Geen dagjesmensen.',
                                },
                                {
                                    icon: Star,
                                    title: 'Stok achter de deur',
                                    desc: 'Maandelijkse 20 min persoonlijke coaching om scherp te blijven.',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="rounded-xl border border-border bg-card p-6 text-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i * 0.3}
                                >
                                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="mb-2 text-base font-bold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOCIAL PROOF + GOOGLE REVIEWS */}
                <section className="bg-card py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
                                Echte mensen.{' '}
                                <span className="text-primary">Echte resultaten.</span>
                            </h2>
                            <p className="mx-auto mb-14 max-w-2xl text-lg text-muted-foreground">
                                Wij werken met data en bewezen methodes. Dit zeggen onze leden op
                                Google (5.0 ★ — 274 reviews).
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-14 grid grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                        >
                            {[
                                {
                                    value: '1000+',
                                    label: 'Transformaties',
                                    sub: 'Succesvol begeleid in Uden & Schijndel',
                                },
                                {
                                    value: '5.0/5',
                                    label: 'Google Reviews',
                                    sub: 'Op basis van 274 Google Reviews',
                                },
                                {
                                    value: '100%',
                                    label: 'Toewijding',
                                    sub: 'Alles draait om jou!',
                                },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-3xl font-extrabold text-primary md:text-4xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-foreground">
                                        {stat.label}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Google Reviews */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={2}
                        >
                            <div className="mb-8 flex items-center justify-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <span className="font-semibold text-foreground">
                                    5.0 op Google · 274 reviews
                                </span>
                            </div>

                            <div className="grid gap-6 text-left md:grid-cols-3">
                                {[
                                    {
                                        name: 'Janneke V.',
                                        text: 'Ik ben zo blij dat ik de stap heb gezet. Na jaren alles zelf proberen, heb ik hier in 12 weken meer resultaat behaald dan in 5 jaar. De begeleiding is persoonlijk en professioneel. Brayen is een topcoach!',
                                        ago: '3 weken geleden',
                                    },
                                    {
                                        name: 'Roy D.',
                                        text: 'Als drukke ondernemer dacht ik dat ik geen tijd had voor sport. WE ARE liet me zien dat het juist wél past in mijn agenda. De structuur en coaching hebben mijn leven veranderd.',
                                        ago: '1 maand geleden',
                                    },
                                    {
                                        name: 'Linda M.',
                                        text: 'Na mijn zwangerschap voelde ik me niet meer lekker in mijn lichaam. Bij WE ARE voelde ik me meteen begrepen. Geen oordeel, alleen support. 14 kilo kwijt en zoveel meer zelfvertrouwen!',
                                        ago: '2 maanden geleden',
                                    },
                                    {
                                        name: 'Patrick S.',
                                        text: 'De combinatie van physical en mental coaching maakt dit echt uniek. Ze kijken niet alleen naar je training maar ook naar je mindset, voeding en leefstijl. Absolute aanrader.',
                                        ago: '3 maanden geleden',
                                    },
                                    {
                                        name: 'Femke B.',
                                        text: 'Ik had al zoveel diëten geprobeerd. Hier leerde ik eindelijk hoe het wél werkt, zonder mezelf gek te maken. Het team is oprecht betrokken en de sfeer is fantastisch.',
                                        ago: '1 maand geleden',
                                    },
                                    {
                                        name: 'Stefan K.',
                                        text: 'Professioneel, persoonlijk en resultaatgericht. In 12 weken fitter dan ik me in jaren heb gevoeld. En het mooiste: ik weet nu hoe ik het volhoud. Top team!',
                                        ago: '2 weken geleden',
                                    },
                                ].map((review, i) => (
                                    <motion.div
                                        key={i}
                                        className="rounded-xl border border-border bg-background p-5"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={i * 0.2}
                                    >
                                        <div className="mb-2 flex">
                                            {[...Array(5)].map((_, j) => (
                                                <Star
                                                    key={j}
                                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <p className="mb-3 text-sm text-muted-foreground">
                                            "{review.text}"
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-foreground">
                                                {review.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {review.ago}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <a
                                href="https://www.google.com/search?q=WE+ARE+personal+training+reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
                            >
                                Bekijk alle reviews op Google →
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* TEAM & SFEER FOTO'S */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-5xl px-4 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
                                Deel van het <span className="text-primary">WE ARE team</span>
                            </h2>
                            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
                                Bij WE ARE ben je geen nummer. Je wordt onderdeel van een hecht
                                team dat samen traint, groeit en resultaat boekt.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {[
                                intakeTeam1,
                                intakeTeam2,
                                intakeTeam3,
                                intakeTeam4,
                                intakeTeam5,
                                intakeTeam6,
                            ].map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="aspect-square overflow-hidden rounded-xl"
                                >
                                    <img
                                        src={img}
                                        alt={`WE ARE team moment ${i + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FOMO & EXCLUSIVITEIT */}
                <section className="py-20 md:py-28">
                    <div className="container mx-auto max-w-3xl px-4 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                        >
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive">
                                <Clock className="h-4 w-4" />
                                Beperkte beschikbaarheid
                            </div>

                            <h2 className="mb-8 text-3xl font-extrabold md:text-5xl">
                                Niet voor iedereen.
                                <br />
                                <span className="text-primary">En dat is bewust.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="mx-auto max-w-2xl space-y-6 text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                        >
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                We nemen bewust een beperkt aantal mensen aan per maand. Niet om
                                exclusief te doen — maar omdat we geloven dat{' '}
                                <span className="font-semibold text-foreground">
                                    kwaliteit boven kwantiteit
                                </span>{' '}
                                gaat.
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Elke transformatie krijgt onze volle aandacht. Daarom werken we met
                                een selectieproces. We willen zeker weten dat je er klaar voor bent
                                — en dat wij de juiste match zijn.
                            </p>
                            <p className="text-lg font-semibold leading-relaxed text-foreground">
                                Jij hebt al de eerste stap gezet door een intakegesprek te plannen.
                                De meeste mensen komen daar niet eens.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* VRAGEN TER VOORBEREIDING */}
                <section className="relative overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
                    <div className="container relative z-10 mx-auto max-w-3xl px-4">
                        <motion.div
                            className="mb-12 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
                                Vragen ter <span className="text-primary">voorbereiding</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                Deze en nog enkele andere vragen stellen we aan het begin van onze
                                kennismaking om te kijken of we een match zijn.
                            </p>
                        </motion.div>

                        <div className="mx-auto max-w-2xl space-y-6">
                            {[
                                {
                                    number: '01',
                                    question:
                                        'Waar zit jouw grootste frustratie op dit moment?',
                                },
                                {
                                    number: '02',
                                    question:
                                        'Welk probleem komt elke keer weer opnieuw terug waardoor het tot nu toe niet is gelukt om te slagen?',
                                },
                                {
                                    number: '03',
                                    question:
                                        'Wat zouden voor jou redenen zijn om niet te starten?',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-5 rounded-2xl border border-border/50 bg-card p-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i}
                                >
                                    <span className="mt-1 text-3xl font-extrabold leading-none text-primary/30">
                                        {item.number}
                                    </span>
                                    <p className="text-lg font-medium leading-relaxed text-foreground">
                                        {item.question}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WAT JE KUNT VERWACHTEN */}
                <section className="relative overflow-hidden bg-card py-20 md:py-28">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                                Wat je kunt verwachten bij het{' '}
                                <span className="text-primary">intakegesprek</span>
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                Brayen neemt de tijd om jouw situatie, doelen en leefstijl in kaart
                                te brengen. Geen verkooppraatje — een eerlijk en persoonlijk
                                gesprek.
                            </p>

                            <div className="mx-auto mb-10 grid max-w-2xl gap-6 text-left sm:grid-cols-2">
                                {[
                                    'Kennismaking en jouw persoonlijke verhaal',
                                    'Analyse van je huidige situatie en doelen',
                                    'Uitleg over De Transformatie Formule®',
                                    'Bekijken welk traject bij jou past',
                                    'Alle ruimte voor vragen',
                                    'Eerlijk advies — ook als we geen match zijn',
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={i * 0.3}
                                    >
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-foreground">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-xl font-bold text-foreground">
                                Tot snel, <span className="text-primary">Brayen</span>
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}
