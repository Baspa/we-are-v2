import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function Cellulite({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE – personal training Uden en Schijndel komt met een nieuwe blog. Deze blog zal veel vrouwen
                aanspreken dit worstelen met een 'sinaasappelhuid'. Cellulite is iets waar veel vrouwen mee worstelen en
                willen hier graag vanaf. In deze blog gaan we hier dieper op in om erachter te komen of deze vorm{' '}
                <a href="/blogs/genetische-aanleg">genetisch</a> is of dat je er iets aan kunt doen om het te laten
                verdwijnen. Lees je met ons mee?
            </p>
            <h2>Wat is Cellulite?</h2>
            <p>
                Gynoïde lipodystrofie is een gevolg van verandering in de structuur van vetcellen. Om het simpel te
                houden worden de vetcellen groter en worden naar buiten gedrukt. Soms voelt en ziet de huid er bobbelig
                uit. Dit wordt veroorzaakt door de extra vochtopbouw in het weefsel. De ene persoon ervaart meer
                cellulite dan de andere persoon.
            </p>
            <p>
                Normaliter zou een normale ontwikkeling van vetweefsel beginnen in de baarmoeder en stoppen tot een kind
                ongeveer 18 maanden is. Na een tijdelijke 'pauze' wordt dit weer opgepakt vanaf de puberteit. Echter
                bevinden veel mensen zich in een constante status van vet celgroei en het aanmaken van nieuwe vetcellen
                omdat er voedsel in overvloed is. Het overeten (meer calorieën eten dan je lichaam nodig heeft) heeft
                hier een grote invloed op.
            </p>
            <h2>Wat veroorzaakt Cellulite?</h2>
            <p>
                Onderzoeken tonen nog geen waterdicht antwoordt wanneer het gaat om de oorzaak van Cellulite.
                Verschillende onderzoeken tonen wel verbanden tussen verschillende factoren en Cellulite zoals de
                hormonen insuline en oestrogeen (Venereol, 2013) (Menopauzalny, 2014). Hieronder een korte opsomming
                van de verbanden die verschillende onderzoeken hebben gelegd:
            </p>
            <ol>
                <li>
                    Hormonale disbalans door hoge insulinewaarden of bijvoorbeeld tijdens{' '}
                    <a href="/blogs/afvallen-en-overgang">de menopauze</a>.
                </li>
                <li>
                    Cellulite is bijna alleen terug te vinden bij vrouw waardoor oestrogeen een belangrijke rol speelt.
                    Oestrogeen verhoogt de activiteit van de vetcellen in de dijen.
                </li>
                <li>
                    Prolactine maakt cellulite beter zichtbaar door een hogere vochtwaarde in het vetweefsel
                </li>
            </ol>
            <h2>Is het aanpassen van leefstijl voldoende?</h2>
            <p>
                Vaak wordt gedacht dat het aanpassen van je leefstijl met o.a. voeding en beweging cellulite doet laten
                verdwijnen. Onderzoeken tonen dit niet tot weinig aan. Dat neemt niet weg dat er voorbeelden zijn van
                mensen die minder cellulite hadden na het verbeteren van hun leefstijl. Echter zijn hier harde bewijzen
                voor.
            </p>
            <h2>Hoe kom je dan wel van Cellulite af?</h2>
            <p>
                Iedere vrouw krijgt wel op een of andere manier met Cellulite te maken, voornamelijk in de puberteit of
                tijdens <a href="/blogs/sporten-tijdens-en-na-zwangerschap">een zwangerschap</a>. Hoewel er trainers
                zijn dit beweren dat ze je er vanaf kunnen helpen is dit niet het geval. Zoals je hebt gelezen bestaat er
                weinig tot geen literatuur met bewijzen dat je door het aanpassen van je leefstijl er vanaf kan komen. Om
                de kans zo groot mogelijk te maken raden we aan om vooral actief te blijven, voedingspatronen te volgen
                met een lage koolhydraatinname en je{' '}
                <a href="/blogs/stress-verminderen-door-te-sporten">stress laag te houden</a>.
            </p>
            <p>
                Heb je ook al onze blog gelezen over hoe je snel{' '}
                <a href="/blogs/snel-een-platte-buik">een platte buik</a> krijgt?
            </p>
            <h3>Bibliografie</h3>
            <p>
                Menopauzalny, P. (2014, Oktober 13). Opgehaald van:{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26327870/" rel="noopener">
                    https://pubmed.ncbi.nlm.nih.gov/26327870/
                </a>
            </p>
            <p>
                Venereol, J. E. (2013, Maart 27). Opgehaald van:{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22758934/" rel="noopener">
                    https://pubmed.ncbi.nlm.nih.gov/22758934/
                </a>
            </p>
        </BlogPost>
    )
}
