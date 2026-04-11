import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function DeStilleEpidemie({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                In een recent bericht werd onthuld dat maar liefst de helft van de Nederlandse bevolking kampt met
                overgewicht. Nog alarmerender is de voorspelling dat als deze trend zich voortzet, in 2050 twee derde
                van ons te zwaar zal zijn. Deze cijfers zijn niet alleen schokkend, maar ook een duidelijke waarschuwing
                voor de gezondheidscrisis die ons te wachten staat als we niet ingrijpen. Laten we eens dieper ingaan op
                de gevaren van overgewicht en een te grote buikomvang, en wat dit betekent voor onze gezondheid.
            </p>
            <h2>Wanneer heb je overgewicht en een te grote buikomvang?</h2>
            <p>
                Overgewicht wordt vaak gemeten aan de hand van de Body Mass Index (BMI). Een BMI tussen 25 en 30 wijst
                op overgewicht, terwijl een BMI boven de 30 duidt op obesitas. Maar naast BMI is buikomvang een
                cruciale indicator van gezondheidsrisico's.
            </p>
            <p>
                Voor mannen geldt een buikomvang van meer dan 94 cm als verhoogd risico, en boven de 102 cm als sterk
                verhoogd risico. Bij vrouwen liggen deze grenzen op respectievelijk 80 cm en 88 cm. Deze metingen zijn
                belangrijk omdat buikvet, ook wel visceraal vet genoemd, direct rond de organen zit en daardoor
                gevaarlijker is dan onderhuids vet.
            </p>
            <h2>Het zieke vetweefsel: meer dan alleen extra kilo's</h2>
            <p>
                Wat veel mensen niet beseffen, is dat overgewicht niet simpelweg een kwestie is van te veel eten en te
                weinig bewegen. Bij overgewicht wordt het vetweefsel zelf ziek. Dit proces heeft verstrekkende gevolgen
                voor het hele lichaam:
            </p>
            <ol>
                <li>
                    Ontstekingsreacties: Ziek vetweefsel produceert ontstekingsstoffen die chronische, laaggradige
                    ontstekingen in het lichaam veroorzaken.
                </li>
                <li>
                    Hormoonverstoring: Vetweefsel produceert hormonen die de stofwisseling beïnvloeden, waaronder
                    leptine en adiponectine. Bij overgewicht raakt deze productie verstoord.
                </li>
                <li>
                    Insulineresistentie: Ziek vetweefsel reageert minder goed op insuline, wat kan leiden tot diabetes
                    type 2.
                </li>
                <li>
                    Verhoogde vetopslag: Het zieke vetweefsel slaat makkelijker vet op, waardoor een vicieuze cirkel
                    ontstaat.
                </li>
            </ol>
            <h2>De weg naar een gezonder gewicht</h2>
            <p>
                Het goede nieuws is dat het nooit te laat is om actie te ondernemen. Zelfs een bescheiden
                gewichtsverlies van 5-10% kan al significante gezondheidsvoordelen opleveren. Hier zijn enkele stappen
                die je kunt nemen:
            </p>
            <ol>
                <li>
                    Voeding: Focus op een gebalanceerd dieet rijk aan groenten, fruit, volkoren producten en magere
                    eiwitten.
                </li>
                <li>Beweging: Streef naar minimaal 30 minuten matige beweging per dag.</li>
                <li>Slaap: Voldoende slaap is cruciaal voor een gezond gewicht. Mik op 7-9 uur per nacht.</li>
                <li>
                    Stressmanagement: Chronische stress kan bijdragen aan gewichtstoename. Vind gezonde manieren om
                    stress te verminderen.
                </li>
                <li>
                    Professionele hulp: Overweeg om een personal trainer in te schakelen voor persoonlijk advies.
                </li>
            </ol>
            <p>
                Door bewust te zijn van de risico's van overgewicht en een te grote buikomvang, en door actie te
                ondernemen, kunnen we samen werken aan een gezonder Nederland. Laten we ervoor zorgen dat de
                voorspelling voor 2050 niet uitkomt, maar in plaats daarvan een toekomst creëren waarin gezondheid en
                vitaliteit de norm zijn.
            </p>
        </BlogPost>
    )
}
