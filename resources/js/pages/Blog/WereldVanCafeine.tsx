import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function WereldVanCafeine({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Hallo daar! Vandaag gaan we het hebben over iets waar de meesten van ons niet zonder kunnen - cafeïne.
                Van je ochtendkoffie tot die energiedrankjes die je helpen de nacht door te komen, cafeïne is overal om
                ons heen. Maar wat is cafeïne eigenlijk? En is het gezond of niet? Laten we eens duiken in de wereld van
                cafeïne.
            </p>
            <h2>Wat is cafeïne?</h2>
            <p>
                Cafeïne is een natuurlijk stimulerend middel dat voorkomt in verschillende plantensoorten. Het werkt
                door het centrale zenuwstelsel te stimuleren, waardoor je je alerter en minder moe voelt (Mayo Clinic,
                2017). Dat verklaart waarom die eerste slok koffie 's ochtends zo verfrissend aanvoelt!
            </p>
            <h2>Is cafeïne gezond?</h2>
            <p>
                Er is veel discussie over de gezondheidseffecten van cafeïne. Sommige studies suggereren dat matige
                cafeïneconsumptie kan helpen bij het verbeteren van de mentale en fysieke prestaties, het verhogen van
                de vetverbranding en het verminderen van het risico op bepaalde ziekten zoals Alzheimer en Parkinson
                (Poole et al., 2017). Echter, te veel cafeïne kan leiden tot slapeloosheid, nervositeit, snelle
                hartslag en andere problemen (Mayo Clinic, 2017). Dus, zoals bij de meeste dingen, is matiging de
                sleutel. Onze richtlijn is 4 tot 6 milligram cafeïne per kilo lichaamsgewicht.
            </p>
            <h2>In welke voedingsproducten zit veel cafeïne?</h2>
            <p>
                Wanneer we het over cafeïne hebben, denken de meesten van ons waarschijnlijk aan koffie. Maar wist je
                dat er veel andere voedingsproducten zijn die cafeïne bevatten? Thee, chocolade, sommige frisdranken en
                zelfs bepaalde medicijnen bevatten cafeïne (Mitchell et al., 2014). Dus als je probeert je
                cafeïne-inname te beperken, is het belangrijk om deze andere bronnen in gedachten te houden.
            </p>
            <h2>Het verschil tussen snelle en trage cafeïne</h2>
            <p>
                Wist je dat niet alle cafeïne hetzelfde is? Er is een verschil tussen wat we 'snelle' en 'trage'
                cafeïne noemen. Snelle cafeïne, zoals die in energiedrankjes en koffie, komt snel in je systeem en geeft
                je een snelle energieboost. Trage cafeïne, zoals die in thee, komt langzamer in je systeem en geeft je
                een meer geleidelijke energieboost (Liguori et al., 1997). Dus afhankelijk van wat je nodig hebt, kun
                je kiezen voor snelle of trage cafeïne.
            </p>
            <p>
                We hopen dat dit je een beter inzicht heeft gegeven in de wereld van cafeïne. Onthoud, zoals bij alles,
                is matiging de sleutel. Dus geniet van je ochtendkoffie, maar vergeet niet om ook andere bronnen van
                cafeïne in de gaten te houden. En vergeet niet, er is altijd tijd voor een kopje thee!
            </p>
            <h3>Bibliografie</h3>
            <p>De informatie in dit artikel is gebaseerd op betrouwbare bronnen uit de literatuur.</p>
            <p>
                Mayo Clinic. (2017). Caffeine: How much is too much?
                <a
                    href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20045678"
                    target="_blank"
                >
                    https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20045678
                </a>
            </p>
            <p>
                Mitchell, D. C., Knight, C. A., Hockenberry, J., Teplansky, R., & Hartman, T. J. (2014). Beverage
                caffeine intakes in the U.S. Food and Chemical Toxicology, 63, 136–142.
                <a href="https://doi.org/10.1016/j.fct.2013.10.042" target="_blank">
                    https://doi.org/10.1016/j.fct.2013.10.042
                </a>
            </p>
            <p>
                Poole, R., Kennedy, O. J., Roderick, P., Fallowfield, J. A., Hayes, P. C., & Parkes, J. (2017).
                Coffee consumption and health: umbrella review of meta-analyses of multiple health outcomes. BMJ, 359,
                j5024.
                <a href="https://doi.org/10.1136/bmj.j5024" target="_blank">
                    https://doi.org/10.1136/bmj.j5024
                </a>
            </p>
            <p>
                Liguori, A., Hughes, J. R., & Grass, J. A. (1997). Absorption and subjective effects of caffeine from
                coffee, cola and capsules. Pharmacology Biochemistry and Behavior, 58(3), 721-726.
                <a href="https://doi.org/10.1016/S0091-3057(97)00003-8" target="_blank">
                    https://doi.org/10.1016/S0091-3057(97)00003-8
                </a>
            </p>
        </BlogPost>
    )
}
