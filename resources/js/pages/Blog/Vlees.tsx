import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function Vlees({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE – Personal Training Uden en Schijndel komt met een nieuwe blog. In deze blog openen we de
                discussie over het consumeren van vlees. Zijn we hier als mensen wel voor gemaakt en wat doet het met ons
                lichaam als we minder vlees zouden eten? Documentaires als THE GAME CHANGEGAMERS en WHAT THE HEALTH
                geven hier een beeld over vanuit één optiek. In deze blog bekijken we het van beide kanten.
            </p>
            <h2>Zijn we als mensen geschikt voor vlees?</h2>
            <p>
                Wanneer we kijken naar ons gebit zijn we als mensen ontworpen als omnivoren. Dit betekent dat we zowel
                vlees als planten eten. We hebben namelijk vier snijtanden voor het scheuren van vlees en een flinke
                partij kiezen voor op planten te kauwen. Daarnaast produceert ons lichaam enzymen die bestemd zijn voor
                het verteren en opnemen van vlees. Dit wijst erop dat de natuur ons in elkaar heeft gezet om zowel
                planten als vlees te eten. Ook is het belangrijk dat we als mensen ooit vlees eten. Bepaalde
                voedingstoffen die we uit vlees halen kunnen we niet uit planten halen zoals vitamine B12. Wanneer je
                vlees dus helemaal uit je voeding zou schrappen is de kans groot dat je tekorten krijgt in bepaalde
                voedingsstoffen. Daarnaast is vlees belangrijke bron van{' '}
                <a href="/blogs/het-belang-van-eiwitten">eiwitten</a> die belangrijk zijn voor het lichaam om
                bijvoorbeeld <a href="/blogs/snelheid-verlies-spiermassa">spiermassa</a> te kunnen behouden.
            </p>
            <h2>Vlees schrappen dus niet, wel minderen?</h2>
            <p>
                Het minderen van vlees is echter wel aan te raden om gezonder en vitaler door het leven te gaan.
                Hierdoor hoef je niet direct vlees te schrappen uit je voedingspatroon maar het starten met een of twee
                dagen zonder vlees is al een begin. Gezondheidsvoordelen die het gevolg zijn van minder vlees zijn o.a.:
            </p>
            <h3>1. Het makkelijker verliezen van lichaamsgewicht</h3>
            <p>
                Studies tonen aan dat mensen die minder vlees eten aanzienlijk meer en sneller gewicht verliezen dan
                mensen die dagelijks vlees eten. Deze onderzoeken lieten zien dat de controle groep aanzienlijk meer
                gewicht verloor na 18 weken een vegetarisch dieet te hebben gevolgd. (Huang, 2016).
            </p>
            <h3>2. Kan de darmgezondheid verbeteren</h3>
            <p>
                Vlees wordt vervangen door meer fruit, groente, noten en zaden. Deze producten bevatten vezels die weer
                goed zijn voor je darmen. Deze vezels activeren de goede bacteriën die waren als ontstekingsremmers voor
                het lichaam. Vlees consumeren in grote hoeveelheden veroorzaken het tegenovergestelde en dus wil je dit
                graag voorkomen om de gezondheid van je darmen te verbeteren.
            </p>
            <h3>3. Verkleinen van de kans op kanker</h3>
            <p>
                Onderzoeken tonen aan dat het eten van rood en bewerkt vlees de kans op kanker vergroot (Zhao, 2017).
                Vleessoorten als gevogelte en kip laten dit verband niet zien waardoor het wordt aangeraden om deze
                vormen van vlees te eten wanneer je vlees eet.
            </p>
            <h3>Bibliografie</h3>
            <p>
                Huang, R.-Y. (2016, janauri 31). Opgehaald van{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26138004/" rel="noopener">
                    https://pubmed.ncbi.nlm.nih.gov/26138004/
                </a>
            </p>
            <p>
                Zhao, Z. (2017, oktober 10). Opgehaald van{' '}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5669970/" rel="noopener">
                    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5669970/
                </a>
            </p>
        </BlogPost>
    )
}
