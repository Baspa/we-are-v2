import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function IntermittentFasting({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Een populaire nieuwe methode om af te vallen is intermittent fasting, ofwel periodiek vasten genoemd.
                Doordat deze methode nog relatief nieuw is zijn er weinig gegevens bekend over de gezondheidsrisico's of
                gezondheidswinst op de lange termijn. Toch zien we deze methode steeds vaker voorkomen. Wat houd
                intermittent fasting in en waarom komt deze methode van di&euml;ten steeds meer voor?
            </p>
            <h2>Wat is intermittent fasting?</h2>
            <p>
                Als we het periodiek vasten noemen, zal de werking misschien al iets vanzelfsprekender zijn. Met
                intermitten fasting wissel je namelijk periodes van vasten af met periodes van eten. In de periode van
                vasten mag je wel water en/of thee drinken, maar niks anders drinken of eten. De periodes van vasten en
                eten wisselen bij verschillende methodes.
            </p>
            <p>
                De meeste bekende variant is de 16/8 variant, waarbij periodes van 16 uur vasten afwisselen met periodes
                van 8 uur lang eten. Deze 8 uur kunnen bijvoorbeeld van 10 uur in de ochtend tot 6 uur in de avond of
                van 12 uur in de middag tot 8 uur in de avond zijn. In deze 8 uur neem je de 'normale' hoeveelheid
                calorie&euml;n in die je mag innemen om af te vallen. Buiten deze mag je wel water en/of thee drinken,
                maar verder mag je niks meer nuttigen. Kortgezegd is het enige wat verandert wanneer je eet, maar
                verandert er niks aan wat je eet.
            </p>
            <p>
                Andere methodes zijn de 24 uur vasten-methode en de 5/2-methode. Bij de 24 uur vasten-methode ga je 1 of
                2 keer in de week een periode van vasten gebruiken, waarbij je dus enkel water en/of thee mag drinken
                maar niks mag eten. Bij de 5/2-methode eet je 5 dagen in de week 'normaal', terwijl je de andere 2 dagen
                heel erg weinig eet (zo'n 500 &aacute; 600 calorie&euml;n).
            </p>
            <h2>Waarom zou je intermittent fasting gebruiken?</h2>
            <p>
                Intermittent fasting zou vele voordelen hebben. Zo zou het helpen met extra gewichtsverlies, het
                verbeteren van je bloedsuikerspiegel, het verminder van de kans op hartziektes en zou het zelfs de kans
                op bepaalde neurogeneratieve ziektes als Parkinson en Alzheimer kunnen verminderen. De vraag is echter of
                dit waar is.
            </p>
            <p>
                Er zijn een wel aantal voordelen van intermittent fasting. Ten eerste verbetert het je
                insulinegevoeligheid. Als je koolhydraten consumeert maakt je lichaam insuline aan om de suikers uit je
                bloed op te nemen. Hoe vaker je koolhydraat consumeert, hoe vaker je lichaam insuline moet aanmaken en
                hoe minder gevoelig je word voor insuline. Je lichaam moet immers steeds meer insuline produceren. In
                extreme vorm kan dit leiden tot diabetes, omdat je lichaam insuline tekort komt. Bij intermittent fasting
                heb je minder insuline pieken op een dag, wat je insulinegevoeligheid ten goede komt.
            </p>
            <p>
                Ten tweede stijgen de waardes van het groeihormoon. Hierdoor zullen alle weefsels die vet als brandstof
                kunnen gebruiken dit ook gaan doen, wat de vetverbranding ten goede komt. Nu is het wel zo dat die
                toename van het groeihormoon past laat in de periode van vasten optreedt. Dus hoe langer je periode van
                vasten is, hoe meer effect je hiervan merkt.
            </p>
            <p>
                Ten derde verhoogt het de vetverbranding. Door maar in beperkte periodes te eten zorg je ervoor dat je
                lichaam minder insulinepieken heeft. Hierdoor produceert je lichaam bepaalde hormonen zoals
                noradrenaline. Een van de effecten van noradrenaline is het vrijmaken van vetzuren uit de vetcellen om
                deze om te zetten tot energie. Door minder insulinepieken heeft je lichaam dus meer tijd om je
                vetreserves aan te spreken.
            </p>
            <h2>Heeft intermittent fasting effect?</h2>
            <p>
                Intermittent fasting is een dieetmethode. Het doel van een dieetmethode is het afvallen van gewicht of
                vetverlies. Hiermee zou je de vraag met ja beantwoorden, omdat je met intermittent fasting inderdaad zult
                afvallen als je deze goed hanteert. Echter komt dit voornamelijk doordat je hiermee een calorietekort
                hanteert. Ten opzichte van een normaal dieet waarbij je hetzelfde calorietekort hanteert maar gedurende
                de hele dag eet is er geen significant verschil tussen een regulier dieet en intermittent fasting op het
                gebied van gewichtsverlies[1].
            </p>
            <p>
                Het allerbelangrijkste bij het afvallen is dat je een calorietekort hanteert. Dit kun je op vele
                methodes doen, waarvan intermittent fasting er een is. Intermittent fasting heeft een aantal voordelen,
                maar op het gebied van extra gewichtsverlies zal het geen groot verschil geven met een normaal dieet.
                Daarnaast zijn de lange termijn effecten op de gezondheid nog niet duidelijk in beeld doordat
                intermittent fasting een vrij nieuwe methode is.
            </p>
            <p>
                Uiteindelijk moet je een methode vinden die goed bij jou past en die jij goed vol kunt houden. Kijk je
                niet blind op wat in theorie werkt, maar vind uit wat in de praktijk het beste resultaat voor jou geeft.
                Zo kun je intermittent fasting gaan proberen, en kijken of dit voor jou een geschikte methode is om
                resultaat te gaan behalen.
            </p>
            <p>
                [1] Seimon, R. V., Roekenes, J. A., Zibellini, J., Zhu, B., Gibson, A. A., Hills, A. P., &hellip; &amp;
                Sainsbury, A. (2015).{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26384657/" target="_blank">
                    Do intermittent diets provide physiological benefits over continuous diets for weighth loss? A
                    systematic review of clinical trials.
                </a>{' '}
                Molecular and cellular endocrinology, 418, 153-172.
            </p>
        </BlogPost>
    )
}
