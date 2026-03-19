import { Head } from '@inertiajs/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowLeft, Send, Loader2 } from 'lucide-react'
import { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'

type Abonnement = 'premium' | 'onderhoud_plus' | 'onderhoud' | null
type TrainingType = 'personal' | 'duo' | null
type Frequentie = 1 | 2 | 3 | 4 | null
type Contract = 'maandelijks' | 'jaarcontract' | null

function OptionCard({ label, description, onClick, icon }: { label: string; description?: string; onClick: () => void; icon?: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="group w-full rounded-xl border border-border bg-card p-6 text-left transition-all duration-300 hover:border-primary"
        >
            <div className="flex items-center gap-4">
                {icon && <span className="text-3xl">{icon}</span>}
                <div>
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">{label}</h3>
                    {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
                </div>
            </div>
        </motion.button>
    )
}

export default function Abonnement() {
    const [abonnement, setAbonnement] = useState<Abonnement>(null)
    const [trainingType, setTrainingType] = useState<TrainingType>(null)
    const [frequentie, setFrequentie] = useState<Frequentie>(null)
    const [contract, setContract] = useState<Contract>(null)
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const getStep = () => {
        if (!abonnement) {
return 1
}

        if (abonnement === 'premium' && !trainingType) {
return 2
}

        if (abonnement === 'premium' && trainingType === 'personal' && !frequentie) {
return 3
}

        if (abonnement === 'premium' && trainingType === 'duo' && !frequentie) {
return 6
}

        if (abonnement === 'premium' && trainingType === 'duo' && frequentie) {
return 'price'
}

        if (abonnement === 'premium' && trainingType === 'personal' && frequentie) {
return 'price'
}

        if (abonnement === 'onderhoud_plus' && !frequentie) {
return 4
}

        if (abonnement === 'onderhoud_plus' && frequentie) {
return 'price'
}

        if (abonnement === 'onderhoud' && !contract) {
return 5
}

        if (abonnement === 'onderhoud' && contract) {
return 'price'
}

        return 1
    }

    const getPrice = (): string => {
        if (abonnement === 'premium' && trainingType === 'personal') {
            const prices: Record<number, string> = { 1: '€325', 2: '€625', 3: '€870', 4: '€1.120' }

            return prices[frequentie!] + ' per maand'
        }

        if (abonnement === 'premium' && trainingType === 'duo') {
            const prices: Record<number, string> = { 1: '€265', 2: '€525', 3: '€715', 4: '€885' }

            return prices[frequentie!] + ' per persoon per maand'
        }

        if (abonnement === 'onderhoud_plus') {
            return frequentie === 1 ? '€175 per maand' : '€350 per maand'
        }

        if (abonnement === 'onderhoud') {
            return contract === 'maandelijks' ? '€70 per maand' : '€67,50 per maand'
        }

        return ''
    }

    const getSummary = () => {
        const lines: string[] = []
        const labels: Record<string, string> = {
            premium: 'Premium', onderhoud_plus: 'Onderhoud+', onderhoud: 'Onderhoud',
            personal: 'Personal Training', duo: 'DUO Training',
            maandelijks: 'Maandelijks opzegbaar', jaarcontract: '1 jaar contract',
        }
        lines.push(`Abonnement: ${labels[abonnement!]}`)

        if (trainingType) {
lines.push(`Type: ${labels[trainingType]}`)
}

        if (frequentie) {
lines.push(`Frequentie: ${frequentie}x per week`)
}

        if (contract) {
lines.push(`Contract: ${labels[contract]}`)
}

        lines.push(`Prijs: ${getPrice()}`)

        return lines
    }

    const handleEmail = () => {
        setSending(true)
        const summary = getSummary()
        const subject = encodeURIComponent('Nieuwe abonnementskeuze via website')
        const body = encodeURIComponent(summary.join('\n'))
        window.location.href = `mailto:brayen@we-are.club?subject=${subject}&body=${body}`
        setTimeout(() => {
            setSending(false)
            setSent(true)
        }, 1000)
    }

    const reset = () => {
        setAbonnement(null)
        setTrainingType(null)
        setFrequentie(null)
        setContract(null)
        setSent(false)
    }

    const goBack = () => {
        const step = getStep()

        if (step === 'price') {
            if (abonnement === 'premium' && trainingType === 'personal') {
setFrequentie(null)
} else if (abonnement === 'premium' && trainingType === 'duo') {
setFrequentie(null)
} else if (abonnement === 'onderhoud_plus') {
setFrequentie(null)
} else if (abonnement === 'onderhoud') {
setContract(null)
}
        } else if (step === 3 || step === 6) {
setTrainingType(null)
} else if (step === 2 || step === 4 || step === 5) {
setAbonnement(null)
}
    }

    const step = getStep()

    return (
        <MainLayout showStickyCTA={false}>
            <Head title="Abonnement kiezen | WE ARE Personal Training Uden & Schijndel">
                <meta name="description" content="Kies jouw abonnement bij WE ARE. Premium Personal Training, Onderhoud+ of Onderhoud - vind het plan dat bij jou past." />
                <meta name="robots" content="index, follow" />
            </Head>

            <main className="min-h-screen bg-background pb-20 pt-28">
                <div className="container mx-auto max-w-2xl px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
                        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
                            Kies jouw <span className="text-primary">abonnement</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">Beantwoord een paar vragen en ontdek direct jouw prijs.</p>
                    </motion.div>

                    {/* Progress indicator */}
                    {step !== 1 && (
                        <div className="mb-8 flex items-center gap-3">
                            <button onClick={goBack} className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Vorige
                            </button>
                            <button onClick={reset} className="ml-auto text-sm text-muted-foreground transition-colors hover:text-primary">
                                Opnieuw beginnen
                            </button>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {/* Step 1: Abonnement kiezen */}
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">Naar welk abonnement wil je overstappen?</h2>
                                <OptionCard label="Premium" description="Intensieve begeleiding met maximaal resultaat" icon="💎" onClick={() => setAbonnement('premium')} />
                                <OptionCard label="Onderhoud+" description="Blijf in vorm met persoonlijke begeleiding" icon="🔥" onClick={() => setAbonnement('onderhoud_plus')} />
                                <OptionCard label="Onderhoud" description="Zelfstandig trainen met toegang tot de gym" icon="💪" onClick={() => setAbonnement('onderhoud')} />
                            </motion.div>
                        )}

                        {/* Step 2: Personal of DUO (Premium) */}
                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">Wil je Personal Training of DUO Training?</h2>
                                <OptionCard label="Personal Training" description="1-op-1 begeleiding voor maximaal resultaat" icon="🏋️" onClick={() => setTrainingType('personal')} />
                                <OptionCard label="DUO Training" description="Samen trainen met een trainingspartner" icon="👥" onClick={() => setTrainingType('duo')} />
                            </motion.div>
                        )}

                        {/* Step 3: Frequentie (Premium Personal) */}
                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">Hoe vaak per week wil je trainen?</h2>
                                <OptionCard label="1x per week" icon="1️⃣" onClick={() => setFrequentie(1)} />
                                <OptionCard label="2x per week" icon="2️⃣" onClick={() => setFrequentie(2)} />
                                <OptionCard label="3x per week" icon="3️⃣" onClick={() => setFrequentie(3)} />
                                <OptionCard label="4x per week" icon="4️⃣" onClick={() => setFrequentie(4)} />
                            </motion.div>
                        )}

                        {/* Step 6: Frequentie (Premium DUO) */}
                        {step === 6 && (
                            <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">Hoe vaak per week wil je trainen?</h2>
                                <OptionCard label="1x per week" icon="1️⃣" onClick={() => setFrequentie(1)} />
                                <OptionCard label="2x per week" icon="2️⃣" onClick={() => setFrequentie(2)} />
                                <OptionCard label="3x per week" icon="3️⃣" onClick={() => setFrequentie(3)} />
                                <OptionCard label="4x per week" icon="4️⃣" onClick={() => setFrequentie(4)} />
                            </motion.div>
                        )}

                        {/* Step 4: Frequentie (Onderhoud+) */}
                        {step === 4 && (
                            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">Hoe vaak per week wil je trainen?</h2>
                                <OptionCard label="1x per week" icon="1️⃣" onClick={() => setFrequentie(1)} />
                                <OptionCard label="2x per week" icon="2️⃣" onClick={() => setFrequentie(2)} />
                            </motion.div>
                        )}

                        {/* Step 5: Contract (Onderhoud) */}
                        {step === 5 && (
                            <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">Wil je maandelijks opzegbaar of een jaarcontract?</h2>
                                <OptionCard label="Maandelijks opzegbaar" description="Flexibel, elke maand opzegbaar" icon="📅" onClick={() => setContract('maandelijks')} />
                                <OptionCard label="1 jaar contract" description="Voordeliger tarief, daarna maandelijks opzegbaar" icon="📋" onClick={() => setContract('jaarcontract')} />
                            </motion.div>
                        )}

                        {/* Price result */}
                        {step === 'price' && (
                            <motion.div key="price" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center">
                                <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                                    <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <Check className="h-8 w-8 text-primary" />
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold text-foreground">Jouw abonnement</h2>
                                    <div className="mb-8 space-y-2">
                                        {getSummary().map((line, i) => (
                                            <p key={i} className={`${i === getSummary().length - 1 ? 'mt-4 text-3xl font-bold text-primary' : 'text-muted-foreground'}`}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    {!sent ? (
                                        <button
                                            onClick={handleEmail}
                                            disabled={sending}
                                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                                        >
                                            {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                                            {sending ? 'Versturen...' : 'Verstuur per e-mail'}
                                        </button>
                                    ) : (
                                        <p className="text-lg font-semibold text-primary">Je e-mailapp is geopend! Verstuur de e-mail om je keuze door te geven.</p>
                                    )}

                                    <button onClick={reset} className="mx-auto mt-6 block text-sm text-muted-foreground transition-colors hover:text-primary">
                                        Opnieuw beginnen
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </MainLayout>
    )
}
