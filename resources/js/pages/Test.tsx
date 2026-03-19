import { Head, Link } from '@inertiajs/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, XCircle, Download } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import MainLayout from '@/layouts/MainLayout'

type Question =
    | { type: 'radio'; question: string; options: string[]; passCondition: (answer: string) => boolean }
    | { type: 'slider'; question: string; min: number; max: number; passCondition: (value: number) => boolean }
    | { type: 'open'; question: string }
    | { type: 'checkbox'; question: string; options: string[]; passCondition: (answer: string) => boolean }
    | { type: 'yesno'; question: string; passCondition: (answer: boolean) => boolean }

const questions: Question[] = [
    {
        type: 'radio',
        question: 'Wat is jouw doel om te trainen?',
        options: [
            'Fysieke (en mentale) verandering zoals afvallen of gespierder worden',
            'Sport specifiek zoals sprongkracht of sprintsnelheid',
            'Duursport zoals marathon of triatlon',
        ],
        passCondition: (a) => a === 'Fysieke (en mentale) verandering zoals afvallen of gespierder worden',
    },
    {
        type: 'slider',
        question: 'Kun je een cijfer geven hoe belangrijk deze verandering voor je is op dit moment?',
        min: 1,
        max: 10,
        passCondition: (v) => v >= 8,
    },
    {
        type: 'open',
        question: 'Kun je ons meer vertellen over waarom je dit cijfer hebt gegeven?',
    },
    {
        type: 'checkbox',
        question: 'In hoeverre sta je open voor het aanpassen van je huidige leefstijl (zoals voeding, rust en planning) om jouw doel te behalen?',
        options: [
            'Ik sta hier volledig voor open',
            'Ik sta hier deels voor open',
            'Ik sta hier (nog) niet voor open',
        ],
        passCondition: (a) => a !== 'Ik sta hier (nog) niet voor open',
    },
    {
        type: 'open',
        question: 'Wat zijn jouw meest hardnekkige gewoontes en/of routines die we moeten doorbreken om jouw resultaat te kunnen behalen?',
    },
    {
        type: 'yesno',
        question: 'Kun je de komende periode structureel 3 tot 5 uur per week vrijmaken voor het behalen van jouw doel?',
        passCondition: (a) => a === true,
    },
    {
        type: 'radio',
        question: 'Welke begeleidingsstijl past het beste bij jou?',
        options: [
            'Sturend – De begeleider neemt de leiding, geeft duidelijke instructies en bepaalt tempo en doelen.',
            'Ondersteunend – De begeleider luistert, toont begrip, geeft vertrouwen en sluit aan bij jouw behoefte.',
            'Coachend – De begeleider stelt vragen, stimuleert zelf nadenken en helpt eigen oplossingen te vinden.',
            'Combinatie – Een combinatie van alle drie de bovenstaande stijlen.',
        ],
        passCondition: () => true,
    },
    {
        type: 'open',
        question: 'Hoe kijk jij naar jouw eigen inzet en verantwoordelijkheid binnen De Transformatie Formule?',
    },
    {
        type: 'open',
        question: 'Zijn er bijzonderheden aan jouw situatie zoals blessures of medicatie?',
    },
    {
        type: 'yesno',
        question: 'Ben je bewust en bereid om te investeren in een uniek programma met tarieven startend vanaf €175 per maand?',
        passCondition: (a) => a === true,
    },
]

function NoMatchResult() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [downloadError, setDownloadError] = useState('')

    const handleDownload = () => {
        setDownloadError('')

        if (!firstName.trim() || !lastName.trim() || !email.trim()) {
            setDownloadError('Vul alle velden in om het e-boek te downloaden.')

            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setDownloadError('Vul een geldig e-mailadres in.')

            return
        }

        window.open('/boek-transformatie-formule.pdf', '_blank')
    }

    return (
        <div className="text-center">
            <XCircle className="mx-auto mb-6 h-16 w-16 text-destructive" />
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Het ziet ernaar uit dat we geen match zijn
            </h2>
            <div className="mb-10 space-y-4 text-left text-base leading-relaxed text-muted-foreground">
                <p>Dank je voor het invullen van de test.</p>
                <p>
                    Wij werken uitsluitend met mensen die volledig passen bij onze aanpak en bereid zijn
                    te investeren in structuur, begeleiding en consistentie.
                </p>
                <p>
                    Op basis van je huidige antwoorden sluit De Transformatie Formule op dit moment niet
                    volledig aan bij wat jij zoekt of nodig hebt.
                </p>
                <p>
                    Mocht je hier vragen over hebben of wil je ons hier graag over spreken, vul dan ons{' '}
                    <Link
                        href="/contact"
                        className="font-semibold text-primary underline transition-colors hover:text-primary/80"
                    >
                        contactformulier
                    </Link>{' '}
                    in zodat we binnen 24 uur contact kunnen opnemen.
                </p>
                <p>
                    Voor de rest laten we je niet met lege handen staan. Omdat jij de test hebt ingevuld,
                    kun je ons <strong>gratis e-boek 'Afvallen zonder voedingsschema'</strong> downloaden.
                    Vul je gegevens in en klik op download.
                </p>
            </div>

            {/* Download formulier */}
            <div className="space-y-4 rounded-xl border border-border bg-muted/30 p-6 text-left">
                <h3 className="text-center text-lg font-bold text-foreground">
                    Gratis e-boek downloaden
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">Voornaam *</Label>
                        <Input
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Je voornaam"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Achternaam *</Label>
                        <Input
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Je achternaam"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="je@email.nl"
                    />
                </div>
                {downloadError && (
                    <p className="text-sm font-medium text-destructive">{downloadError}</p>
                )}
                <button
                    onClick={handleDownload}
                    className="btn-hero inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-lg font-bold"
                >
                    <Download className="h-5 w-5" />
                    Download
                </button>
            </div>
        </div>
    )
}

export default function Test() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<(string | number | boolean)[]>([])
    const [finished, setFinished] = useState(false)
    const [sliderValue, setSliderValue] = useState(5)
    const [openText, setOpenText] = useState('')
    const [selectedRadio, setSelectedRadio] = useState('')

    const current = questions[currentQuestion]

    const goNext = (answer: string | number | boolean) => {
        const newAnswers = [...answers, answer]
        setAnswers(newAnswers)
        setSliderValue(5)
        setOpenText('')
        setSelectedRadio('')

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setFinished(true)
        }
    }

    const passed = finished && answers.every((answer, i) => {
        const q = questions[i]

        if (q.type === 'open') {
return true
}

        if (q.type === 'yesno') {
return q.passCondition(answer as boolean)
}

        if (q.type === 'slider') {
return q.passCondition(answer as number)
}

        if (q.type === 'radio' || q.type === 'checkbox') {
return q.passCondition(answer as string)
}

        return true
    })

    const restart = () => {
        setCurrentQuestion(0)
        setAnswers([])
        setFinished(false)
        setSliderValue(5)
        setOpenText('')
        setSelectedRadio('')
    }

    const renderQuestion = () => {
        if (!current) {
return null
}

        switch (current.type) {
            case 'radio':
                return (
                    <div className="space-y-3">
                        {current.options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setSelectedRadio(opt)}
                                className={`w-full rounded-xl border p-4 text-left transition-all ${
                                    selectedRadio === opt
                                        ? 'border-primary bg-primary/10 text-foreground'
                                        : 'border-border bg-muted/20 text-muted-foreground hover:border-primary/50 hover:bg-muted/40'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                        <button
                            onClick={() => selectedRadio && goNext(selectedRadio)}
                            disabled={!selectedRadio}
                            className="btn-hero mt-6 w-full rounded-full py-4 text-lg font-bold disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Volgende <ArrowRight className="ml-2 inline h-5 w-5" />
                        </button>
                    </div>
                )

            case 'slider':
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <span className="font-display text-6xl font-bold text-primary">{sliderValue}</span>
                            <p className="mt-2 text-sm text-muted-foreground">
                                1 = niet belangrijk &nbsp;—&nbsp; 10 = extreem belangrijk
                            </p>
                        </div>
                        <input
                            type="range"
                            min={current.min}
                            max={current.max}
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
                        />
                        <div className="flex justify-between px-1 text-xs text-muted-foreground">
                            {Array.from({ length: current.max }, (_, i) => (
                                <span key={i}>{i + 1}</span>
                            ))}
                        </div>
                        <button
                            onClick={() => goNext(sliderValue)}
                            className="btn-hero w-full rounded-full py-4 text-lg font-bold"
                        >
                            Volgende <ArrowRight className="ml-2 inline h-5 w-5" />
                        </button>
                    </div>
                )

            case 'open':
                return (
                    <div className="space-y-6">
                        <textarea
                            value={openText}
                            onChange={(e) => setOpenText(e.target.value)}
                            rows={4}
                            placeholder="Typ hier je antwoord..."
                            className="w-full resize-none rounded-xl border border-border bg-muted/20 p-4 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            onClick={() => goNext(openText || '(geen antwoord)')}
                            className="btn-hero w-full rounded-full py-4 text-lg font-bold"
                        >
                            Volgende <ArrowRight className="ml-2 inline h-5 w-5" />
                        </button>
                    </div>
                )

            case 'checkbox':
                return (
                    <div className="space-y-3">
                        {current.options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setSelectedRadio(opt)}
                                className={`w-full rounded-xl border p-4 text-left transition-all ${
                                    selectedRadio === opt
                                        ? 'border-primary bg-primary/10 text-foreground'
                                        : 'border-border bg-muted/20 text-muted-foreground hover:border-primary/50 hover:bg-muted/40'
                                }`}
                            >
                                <span className={`mr-3 inline-block h-5 w-5 rounded border align-middle ${
                                    selectedRadio === opt ? 'border-primary bg-primary' : 'border-muted-foreground'
                                }`}>
                                    {selectedRadio === opt && (
                                        <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </span>
                                {opt}
                            </button>
                        ))}
                        <button
                            onClick={() => selectedRadio && goNext(selectedRadio)}
                            disabled={!selectedRadio}
                            className="btn-hero mt-6 w-full rounded-full py-4 text-lg font-bold disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Volgende <ArrowRight className="ml-2 inline h-5 w-5" />
                        </button>
                    </div>
                )

            case 'yesno':
                return (
                    <div className="flex gap-4">
                        <button
                            onClick={() => goNext(true)}
                            className="btn-hero flex-1 rounded-full py-4 text-lg font-bold"
                        >
                            Ja
                        </button>
                        <button
                            onClick={() => goNext(false)}
                            className="flex-1 rounded-full border border-border bg-muted/30 py-4 text-lg font-bold text-foreground transition-colors hover:bg-muted/60"
                        >
                            Nee
                        </button>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <MainLayout showStickyCTA={false}>
            <Head title="Test: Past De Transformatie Formule bij jou? | WE ARE">
                <meta
                    name="description"
                    content="Ontdek in 10 vragen of De Transformatie Formule past bij jou. Doe de gratis test en ontdek of jij klaar bent voor echte verandering."
                />
                <meta name="robots" content="index, follow" />
            </Head>

            <main className="px-4 pb-20 pt-32">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl">
                        Past De Transformatie Formule<span className="text-primary">®</span> bij jou?
                    </h1>
                    <p className="mx-auto mb-12 max-w-xl text-center text-lg text-muted-foreground">
                        De Transformatie Formule is geen losse training en geen quick fix. We werken alleen met mensen die bereid zijn te investeren in zichzelf, verantwoordelijkheid nemen en openstaan voor persoonlijke begeleiding.
                    </p>

                    <AnimatePresence mode="wait">
                        {!finished ? (
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-2xl border border-border bg-card p-8 md:p-12"
                            >
                                {/* Progress */}
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        Vraag {currentQuestion + 1} van {questions.length}
                                    </span>
                                    <div className="flex gap-1.5">
                                        {questions.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 w-6 rounded-full transition-colors ${
                                                    i < currentQuestion
                                                        ? 'bg-primary'
                                                        : i === currentQuestion
                                                            ? 'bg-primary/50'
                                                            : 'bg-muted'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Question */}
                                <h2 className="mb-10 text-xl font-bold md:text-2xl">
                                    {current.question}
                                </h2>

                                {/* Answer area */}
                                {renderQuestion()}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-2xl border border-border bg-card p-8 md:p-12"
                            >
                                {passed ? (
                                    <div className="text-center">
                                        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-primary" />
                                        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                                            Gefeliciteerd. Jij en De Transformatie Formule zijn een 100% match.
                                        </h2>
                                        <div className="mb-10 space-y-4 text-left text-base leading-relaxed text-muted-foreground">
                                            <p>
                                                Je weet wat je wilt, je bent bereid te investeren in jezelf en je begrijpt
                                                dat echte verandering vraagt om structuur, focus en commitment. Precies dát
                                                is waar wij in uitblinken.
                                            </p>
                                            <p>
                                                Je zoekt geen snelle oplossing of losse trainingen, maar een doordachte
                                                aanpak die je helpt om fitter, sterker en zelfverzekerder te worden — en
                                                dat maakt jou de ideale kandidaat voor De Transformatie Formule.
                                            </p>
                                            <p className="font-semibold text-foreground">
                                                De volgende stap: plan je intake.
                                            </p>
                                            <p>
                                                Samen bepalen we hoe jouw transformatie eruit gaat zien en of we dit
                                                traject samen starten.
                                            </p>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="btn-hero inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold"
                                        >
                                            Jouw avontuur start met koffie!
                                            <ArrowRight className="h-5 w-5" />
                                        </Link>
                                    </div>
                                ) : (
                                    <NoMatchResult />
                                )}

                                <div className="mt-8 text-center">
                                    <button
                                        onClick={restart}
                                        className="text-sm text-muted-foreground underline transition-colors hover:text-foreground"
                                    >
                                        Test opnieuw doen
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
