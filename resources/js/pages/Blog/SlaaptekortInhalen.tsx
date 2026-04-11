import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function SlaaptekortInhalen({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Je hoort regelmatig dat mensen last van slaaptekort hebben. Dit kan door verschillende redenen zijn
                ontstaan. Wellicht had je een leuk feest of heb je net een belangrijk week achter de rug voor je studie
                of werk. Hierdoor heb je toch net wat te weinig geslapen en je merkt dat je je vermoeid voelt. Dit
                fenomeen noemen we slaapschuld, bedacht door de Amerikaanse onderzoeker William C. Dement.
            </p>
            <p>
                De volgende dagen ga je een keer extra vroeg te bed of slaap je langer uit dan gewoonlijk om de slaap in
                te halen. Maar is het wel mogelijk om een slaaptekort te compenseren door daarna een keer langer te
                slapen?
            </p>
            <h2>Effecten slaaptekort</h2>
            <p>
                In je slaap gebeuren belangrijke processen in je hersenen. Tijdens het slapen word namelijk het contact
                tussen hersencellen gestimuleerd. Dit heeft effect op het onthouden en op leerprocessen.
            </p>
            <p>
                In het boek 'Sleep Thieves' van Stanley Coren worden resultaten van verschillende onderzoeken aangehaald
                waaruit blijkt dat een hogere slaapschuld leidt tot een lagere score op een IQ-test. Hoe hoger de
                slaapschuld, hoe lager de score relatief werd. Zo leidde een slaapschuld van 10 uur verdeeld over 5
                nachten tot een score die 15 punten lager lag. In hetzelfde onderzoek word geconcludeerd dat deze score
                weer omhoogging toen de slaapschuld werd ingehaald. Dit betekent dat dat je op dit vlak je slaaptekort
                deels kunt inhalen.
            </p>
            <p>
                Hoewel je slaaptekort dus weldegelijk deels in kunt halen kun je sommige negatieve effecten niet
                volledig compenseren. Je concentratie zal verlaagd blijven ondanks het extra slapen, en je biologische
                klok kan er ook door in de war raken. Hierdoor heb je in de toekomst weer last van meer slaaptekort.
            </p>
            <p>
                Nu is het zo dat je lichaam de effecten van een slaapschuld zelf probeert te compenseren. Door een klein
                aanpassing in de hersenen zul je de dag erop meer diepe slaap krijgen dan normaal gesproken. Dit kwam
                naar voren bij een onderzoek waarbij ze gebruik maakte van een hersenscan.
            </p>
            <h2>Extra slapen</h2>
            <p>
                Is er ook zoiets als het tegenovergesteld van slaapschuld? Ja, dat is er. Het is namelijk mogelijk om van
                tevoren al extra te slapen als je weet dat je een periode minder zult slapen. Hiermee bouw je een
                zogeheten slaapbuffer op. Dit compenseert een slaaptekort beter dan achteraf extra proberen te slapen.
            </p>
            <h2>Een goede nachtrust cre&euml;ren</h2>
            <p>
                Hoewel je een slaaptekort dus deels kunt compenseren is het ook belangrijk om zo goed mogelijk te slapen.
                Je kunt namelijk niet zomaar de uren tellen, want diepe slaap bepaalt mede hoe goed uitgerust je bent.
                Zorg er dus voor dat je rust hebt rond het slapen, zodat je goed in slaap kunt vallen en niet wakker
                word in de nacht.
            </p>
        </BlogPost>
    )
}
