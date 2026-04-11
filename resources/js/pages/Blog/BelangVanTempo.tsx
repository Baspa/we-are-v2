import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function BelangVanTempo({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE personal training Uden en Schijndel komt met een nieuwe blog. In deze blog bespreken we een
                onderdeel uit de krachttraining, namelijk de snelheid van de herhalingen die we per set maken. De een
                met zijn herhalingen vlot terwijl een ander een hele langzame beweging maakt. In deze blog beantwoorden
                we de vraag: wat voor effect heeft dit op de output?
            </p>
            <h2>Excentrisch, concentrisch en pauze</h2>
            <p>
                Om te beginnen is het nodig om uit te leggen dat de herhalingen die worden gemaakt bestaan uit drie
                verschillende fases. Als voorbeeld nemen we een bankdruk oefening. Tijdens deze oefening neem je de
                stang uit het rek en neemt even 'pauze'. Hierbij hangt de stang stil boven je en bereid je jezelf voor
                om de stang te laten zakken (excentrische fase). Terwijl je de stang laat zakken verlengen je spieren.
                Ze komen op rek tijdens deze excentrische fase. Wanneer je beneden bent gearriveerd neem je weer even
                'pauze' om de snelheid uit de oefening te halen. Wanneer je enkele seconden 'pauze' hebt genomen druk
                je de stang weer met alle kracht die je in je hebt omhoog (concentrische fase). Tijdens deze fase
                verkorten je spieren en span je de desbetreffende spier aan. Dit noemen we de concentrische beweging.
                Eenmaal boven neem je weer even 'pauze' en begin je aan herhaling twee.
            </p>
            <ol>
                <li>Excentrische fase (er komt rek op de spier)</li>
                <li>Concentrische fase (de spier verkort)</li>
                <li>Pauze (de fases tussen ex,- en concentrisch)</li>
            </ol>
            <h2>Waarom is tempo belangrijk?</h2>
            <p>
                Het tempo van een herhaling is uiteindelijk bepalend voor de output van je trainingen. Je kunt jezelf
                voorstellen dat wanneer je bij het bankdrukken de stang laat 'vallen' en vervolgens weer explosief uit te
                duwen een heel andere output geeft dan wanneer je de stang in vier seconden laat zakken en vervolgens
                weer in vier seconden uit te duwen. De spanning en de metabole stress van beide tempo's zijn totaal
                verschillend.
            </p>
            <p>
                De eeuwige discussie over de concentrische fase zal zijn: langzaam of explosief? Onderzoeken die zijn
                gedaan tonen aan dat explosieve bewegingen tijdens een concentrische fase zorgen voor meer kracht
                ontwikkeling (González-Badillo, 2014), Daarnaast zorgt een explosieve concentrische fase ervoor dat je
                meer herhalingen kan maken met meer gewicht. Dit zou kunnen leiden tot meer spierontwikkeling.
            </p>
            <p>
                De excentrische fase is de meest onderschatte fase. Deze fase is de fase waarbij zwaartekracht zijn werk
                doet. Wanneer we geen weerstand bieden tijdens deze fase zal het gewicht 'vallen' zonder er iets voor te
                doen. Belangrijk is om weerstand te bieden tijdens deze fase zodat onze spieren moeten werken en
                geprikkeld wordt. Een belangrijk feitje om te weten dat ons lichaam excentrisch 20% sterker is dan
                concentrisch. Dus wanneer je excentrisch niet sterker wordt zal je concentrische fase ook niet toenemen
                om het lichaam niet in gevaar te brengen. Dit is een van de redenen waarom het belangrijk is om
                weerstand te bieden tijdens de excentrische fase. De tweede reden is al eerder genoemd, namelijk dat er
                geen spieractiviteit plaatsvindt wanneer je het gewicht laat 'vallen'.
            </p>
            <h2>Welke tempo moet je aanhouden?</h2>
            <p>
                Het tempo wat je dient aan te houden is per oefening en per persoon afhankelijk. Wanneer iemand met een
                lengte van twee meter een back squat maakt doet hij er relatief langer over om te zakken dan wanneer
                iemand met een lengte van 1,60 meter dit doet. Daarnaast zijn de bewegingsuitslagen van oefeningen
                verschillend dus bestaat er geen heilig tempo.
            </p>
            <h2>Concluderend</h2>
            <p>
                Belangrijk om mee te nemen uit deze blog is om te weten dat elke beweging uit drie fases bestaat. Om
                maximale spierkracht en ontwikkeling te veroorzaken raden we aan om het gewicht explosief uit te duwen en
                langzaam te laten zakken in een tempo van ongeveer drie tot vier seconden, afhankelijk van oefening en
                lengte. Deze manier van training biedt ook de meeste veiligheid om blessures te voorkomen.
            </p>
            <p>
                Heb je ook al onze blog gelezen over{' '}
                <a href="/blogs/genetische-aanleg">genetische aanleg</a>?
            </p>
            <h3>Bibliografie</h3>
            <p>
                González-Badillo, J. J. (2014, April 15). European Journal of Sport Science . Opgehaald van:{' '}
                <a href="https://www.tandfonline.com/doi/abs/10.1080/17461391.2014.905987" rel="noopener">
                    https://www.tandfonline.com/doi/abs/10.1080/17461391.2014.905987
                </a>
            </p>
        </BlogPost>
    )
}
