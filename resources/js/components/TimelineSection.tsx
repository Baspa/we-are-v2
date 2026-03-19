import { useEffect, useRef, useState } from 'react'
import { RotateCcw, Hammer, Sparkles, Shield } from 'lucide-react'

const timelineSteps = [
    {
        week: 'Week 1–4',
        title: 'Reset',
        description: 'Doorbreek oude patronen en leg het fundament voor jouw nieuwe leefstijl.',
        icon: RotateCcw,
    },
    {
        week: 'Week 5–8',
        title: 'Rebuild',
        description: 'Bouw aan kracht en spiermassa. Jouw lichaam verandert zichtbaar.',
        icon: Hammer,
    },
    {
        week: 'Week 9–12',
        title: 'Refine',
        description: "Focus op definitie en de 'finishing touch'. Maximale zichtbare resultaten.",
        icon: Sparkles,
    },
    {
        week: 'Week 12+',
        title: 'Retain',
        description: 'Blijvend resultaat behouden met een duurzaam onderhoudsplan.',
        icon: Shield,
    },
]

interface TimelineStepProps {
    step: (typeof timelineSteps)[0]
    index: number
    isVisible: boolean
}

function TimelineStep({ step, index, isVisible }: TimelineStepProps) {
    const isLeft = index % 2 === 0
    const Icon = step.icon

    return (
        <div className="group relative flex w-full items-start md:items-center">
            <div className={`hidden w-1/2 md:flex ${isLeft ? 'justify-end pr-12' : ''}`}>
                {isLeft && (
                    <div className={`max-w-sm transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <StepContent step={step} align="right" />
                    </div>
                )}
            </div>

            <div className="absolute left-4 z-10 flex flex-col items-center md:left-1/2 md:-translate-x-1/2">
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-500 md:h-12 md:w-12 ${
                        isVisible ? 'scale-100 opacity-100 shadow-[0_0_20px_hsl(var(--primary)/0.4)]' : 'scale-75 opacity-0'
                    }`}
                >
                    <Icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
                </div>
            </div>

            <div className={`flex-1 pl-16 md:w-1/2 md:flex-none md:pl-0 ${!isLeft ? 'md:pl-12' : 'md:pl-12'}`}>
                <div className={`transition-all duration-700 md:hidden ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                    <StepContent step={step} align="left" />
                </div>

                {!isLeft && (
                    <div className={`hidden max-w-sm transition-all duration-700 md:block ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <StepContent step={step} align="left" />
                    </div>
                )}
            </div>
        </div>
    )
}

function StepContent({ step, align }: { step: (typeof timelineSteps)[0]; align: 'left' | 'right' }) {
    return (
        <div className={`${align === 'right' ? 'text-right' : 'text-left'}`}>
            <span className="mb-1 inline-block text-xs font-bold uppercase tracking-widest text-primary">{step.week}</span>
            <h3 className="mb-1 font-display text-lg font-bold text-foreground md:text-xl">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
        </div>
    )
}

export default function TimelineSection() {
    const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
    const stepsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'))
                    if (entry.isIntersecting) {
                        setVisibleSteps((prev) => new Set([...prev, index]))
                    }
                })
            },
            { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        )

        stepsRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section className="overflow-hidden bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center md:mb-20">
                    <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                        Jouw Personal Training Traject in <span className="text-primary">12 Weken</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Van kennismaking tot blijvend resultaat — dit is hoe De Transformatie Formule eruitziet.
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    <div className="absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-px">
                        <div className="h-full w-full bg-linear-to-b from-primary/0 via-primary/40 to-primary/0" />
                    </div>

                    <div className="flex flex-col gap-12 md:gap-16">
                        {timelineSteps.map((step, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    stepsRef.current[index] = el
                                }}
                                data-index={index}
                            >
                                <TimelineStep step={step} index={index} isVisible={visibleSteps.has(index)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
