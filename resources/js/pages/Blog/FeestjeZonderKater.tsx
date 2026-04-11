import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function FeestjeZonderKater({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Heb je ooit op een feest gestaan met een glas water in je hand, terwijl iedereen om je heen proost met
                de meest kleurrijke en exotische drankjes? Voelde je je als een smartphone met een lege batterij op een
                festival? Vrees niet, want ik kom je redden met recepten voor{' '}
                <a href="/blogs/alcoholvrije-cocktails">alcoholvrije cocktails</a> die zo lekker zijn dat zelfs je lever
                je een staande ovatie zal geven.
            </p>
            <h2>1. De Tropische Faux-jito: Een Mojito zonder de Oh-no</h2>
            <p>
                Laten we beginnen met een klassieker: de Mojito. Maar dan zonder de rum, want we willen de volgende dag
                fris en fruitig op ons werk verschijnen, nietwaar?
            </p>
            <h3>Ingrediënten</h3>
            <ul>
                <li>Verse muntblaadjes (een handvol, alsof je geld uitgeeft in een winkel die geen retourbeleid kent)</li>
                <li>1 limoen (in partjes, net als je leven, in stukjes verdeeld)</li>
                <li>2 eetlepels rietsuiker (of naar smaak, we oordelen hier niet)</li>
                <li>IJsblokjes (zoveel als je exen)</li>
                <li>Bruiswater (om het sprankelend te houden, net als je persoonlijkheid)</li>
                <li>Optioneel: een scheutje sodawater met een smaakje, voor de waaghalzen onder ons</li>
            </ul>
            <h3>Bereiding</h3>
            <ul>
                <li>Neem een stevig glas en gooi je munt en limoenpartjes erin.</li>
                <li>
                    Pak een muddler of de achterkant van een lepel (we zijn hier niet op een bartenderschool) en plet de
                    boel tot de munt en limoen hun geheimen prijsgeven.
                </li>
                <li>Strooi de suiker erbij alsof het confetti is op je verjaardagsfeestje.</li>
                <li>Vul het glas met ijsblokjes alsof je een iglo bouwt.</li>
                <li>Top het af met bruiswater en roer het door alsof je een toverdrankje maakt.</li>
                <li>Garneer met een munttakje of een limoenschijfje, voor de Instagram-waardige foto.</li>
            </ul>
            <h2>2. De Virgin Sangria: Een Feest in een Kan</h2>
            <p>
                Nu gaan we naar Spanje, maar zonder de kater. Sangria is het vloeibare equivalent van een zomerhit, maar
                dan zonder de vervelende bijwerkingen.
            </p>
            <h3>Ingrediënten</h3>
            <ul>
                <li>
                    Verschillende soorten <a href="/blogs/groene-smoothies">fruit</a> (in stukjes, alsof je een
                    fruitmand aan het voorbereiden bent voor een zieke vriend)
                </li>
                <li>
                    1 kaneelstokje, (voor een beetje pit, zoals die ene tante met haar scherpe opmerkingen)
                </li>
                <li>1 fles alcoholvrije rode wijn (ja, dat bestaat echt)</li>
                <li>500 ml bruisend mineraalwater (om het feestelijk te houden)</li>
                <li>Optioneel: een beetje honing of agavesiroop voor de zoetekauwen</li>
            </ul>
            <h3>Bereiding</h3>
            <ul>
                <li>
                    Snijd al het fruit in hapklare stukjes en doe ze in een grote kan alsof je een fruitmand aan het
                    voorbereiden bent voor een zieke vriend.
                </li>
                <li>Gooi het kaneelstokje erbij voor wat magie.</li>
                <li>Schenk de alcoholvrije rode wijn eroverheen alsof je een toverdrank brouwt.</li>
                <li>
                    Laat het een paar uur in de koelkast staan, zodat alle smaken kunnen trouwen (en hopelijk blijven ze
                    bij elkaar).
                </li>
                <li>Voeg vlak voor het serveren het bruiswater toe voor de bubbels.</li>
                <li>
                    Serveer in glazen met veel ijs en voel je als een kind dat stiekem van de volwassenen tafel drinkt.
                </li>
            </ul>
            <h2>3. De Designated Driver's Delight: Een Appel-Gember Spritz</h2>
            <p>
                Als laatste hebben we iets voor de helden van de avond: de BOB's. Deze appel-gember spritz is zo
                verfrissend dat je bijna blij bent dat je de auto hebt meegenomen.
            </p>
            <h3>Ingrediënten</h3>
            <ul>
                <li>Appelsap (het liefst versgeperst, voor de illusie van gezondheid)</li>
                <li>Gemberbier (niet te verwarren met gemberale, dat is voor amateurs)</li>
                <li>Limoensap (voor de zure touch, zoals je gezicht als je de rekening krijgt)</li>
                <li>IJsblokjes (wederom, bouw die iglo)</li>
                <li>Verse gember (geschild en in dunne plakjes, alsof je een kunstenaar bent)</li>
            </ul>
            <h3>Bereiding</h3>
            <ul>
                <li>Vul een glas met ijsblokjes alsof je een sneeuwpop aan het maken bent.</li>
                <li>Schenk het appelsap erbij, ongeveer tot de helft van het glas.</li>
                <li>Voeg een scheutje limoensap toe voor wat extra flair.</li>
                <li>Top het af met gemberbier en roer het door alsof je de loterij hebt gewonnen.</li>
                <li>Garneer met een paar plakjes verse gember en een limoenpartje voor de esthetiek.</li>
            </ul>
            <p>
                En daar heb je het, drie alcoholvrije cocktails die je feest naar een hoger niveau tillen zonder dat je
                de volgende dag met een kater wakker wordt. Dus, hef het glas (met iets anders dan water) en geniet van
                de smaakexplosies. Proost op een avond die je je daadwerkelijk zult herinneren!
            </p>
        </BlogPost>
    )
}
