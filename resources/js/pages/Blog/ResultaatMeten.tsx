import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function ResultaatMeten({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE Personal Training Uden en Schijndel Uden en Schijndel komt moet een nieuwe blog. Dit keer gaan
                we het over het resultaat meten aan de hand van lichaamsgewicht tijdens het afvallen. In deze blog gaan
                we dieper in op wat allemaal ons gewicht bepaalt en hoe we het realistisch dienen te meten.
            </p>
            <h2>Wat is lichaamsgewicht?</h2>
            <p>
                Het lichaamsgewicht is de massa van een lichaam, met andere woorden hoe zwaar je bent. Je
                lichaamsgewicht wordt bepaald door een aantal factoren zoals vetmassa,{' '}
                <a href="/blogs/resultaat-meten">spiermassa</a>, botmassa en vochtmassa. Soms wordt er onderscheidt
                gemaakt in vetmassa en vetvrije massa. Vetvrije massa is een verzamelnaam voor alles wat geen vet is in
                je lichaam zoals spieren en vocht. Wanneer ons lichaamsgewicht dus afneemt hoeft dit niet per definitie
                te zeggen dat we ook afvallen in vetmassa. Dit kan ook in spiermassa of vocht zijn.
            </p>
            <h2>Wat is een gezond lichaamsgewicht?</h2>
            <p>
                Een gezond lichaamsgewicht wordt berekend aan de hand van BMI (Body Mass Index). In de berekeningen voor
                BMI worden lengte en lichaamsgewicht gebruikt. Een BMI tussen de 18 en 25 is een gezond BMI. Hoger dan
                25 betekent overgewicht en lager dan 18 betekent ondergewicht. Er zijn uitzondering van mensen die een
                BMI hoger dan 25 hebben omdat ze een bovengemiddeld hoeveelheid spiermassa hebben. Deze mensen hebben in
                theorie overgewicht maar de praktijk laat zien dat dit anders is.
            </p>
            <h2>Kun je resultaat meten aan de hand van lichaamsgewicht?</h2>
            <p>
                Wanneer je probeert om af te vallen is het verstandig om te kijken of je lichaamsgewicht daalt. Echter
                zul je lichaamsgewicht niet iedere dag dalen omdat bovengenoemde factoren zoals spiermassa en vocht mee
                bepalen. Wanneer je lichaam een dag meer vocht behoudt in zijn cellen door{' '}
                <a href="/blogs/stress-verminderen-door-te-sporten">stress</a> of het eten van meer koolhydraten dan
                gemiddeld kun je merken dat je lichaamsgewicht niet daalt. Hoewel veel mensen hierdoor in paniek raken
                en denken dat ze niet goed bezig zijn betekent een stijging in gewicht niet altijd dat je ook{' '}
                <a href="/blogs/vet-omzetten-in-spiermassa">vetmassa</a> bent aangekomen. Het is om deze reden
                belangrijk dat je het lichaamsgewicht berekend aan de hand van gemiddelde.
            </p>
            <h2>Hoe bereken je aan de hand van gemiddelde?</h2>
            <p>
                Hoe meer weegmomenten, hoe realistischer je het gemiddelde kunt berekenen. Bij WE ARE gebruiken we een
                methode waarbij iedereen zeven dagen per week wordt gewogen. Aan het einde van de week tellen we alle
                getallen bij elkaar op en delen we dit door zeven. Op deze manier krijgen we een gemiddelde. We berekenen
                wekelijks het gemiddelde en vergelijken we met het gemiddelde van de week ervoor. Op deze manier zorg je
                ervoor dat je niet wordt misleid door piekmomenten in je gewicht door factoren zoals{' '}
                <a href="/blogs/stress-verminderen-door-te-sporten">stress</a>, ongesteld zijn of zout inname.
            </p>
            <h2>Wat kunnen we concluderen?</h2>
            <p>
                Wanneer je bezig bent om af te vallen is het mogelijk om je resultaat aan de hand van je lichaamsgewicht
                te meten. Wanneer je dit doet dien je dit wel te doen door gemiddeldes te bereiken over de betreffende
                weken en deze met elkaar te vergelijken. Uiteraard is het beter om meer data te kunnen verzamelen zoals
                vetpercentage en het maken van foto's om je vooruitgang te meten.
            </p>
        </BlogPost>
    )
}
