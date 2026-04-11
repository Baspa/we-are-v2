import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function HetJojoEffect({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Je zult er weleens van gehoord hebben of misschien zelfs weleens zelf meegemaakt hebben. Iemand is heel
                veel kilo's afgevallen in korte tijd, maar komt daarna ook heel snel deze kilo's weer aan. Mensen willen
                zo snel mogelijk resultaat. Hierdoor gaan ze manieren zoeken om zoveel mogelijk in korte tijd af te
                kunnen vallen.
            </p>
            <p>
                Dat snelle afvallen en weer snel aankomen word ook weleens aangeduid als het jojo-effect. Maar ligt dit
                effect daadwerkelijk aan het snelle afvallen, of liggen er andere redenen aan ten grondslag?
            </p>
            <h2>Wat gebeurt er tijdens het afvallen?</h2>
            <p>
                Als je gaat afvallen zul je een calorietekort moeten hanteren. Dit betekent dat je minder calorie&euml;n
                binnenkrijgt dan je lichaam eigenlijk nodig heeft. Hierdoor moet het lichaam de energie vanuit een ander
                bron halen. Dit kan hij doen door vet te verbranden of spieren af te breken.
            </p>
            <p>
                Tijdens het afvallen gaat het lichaam zich ook aanpassen naar het tekort. Dit betekent dat zogeheten
                NEAT-processen (Non-Exercise Acitivity Thermogenesis) naar beneden aangepast worden zodat het lichaam
                minder energie verbruikt. Deze processen zijn niet essentieel voor het lichaam. Dit proces word ook
                weleens de spaarstand genoemd. Hierin verbruikt het lichaam zo weinig mogelijk energie om het
                calorietekort te compenseren.
            </p>
            <p>
                De spaarstand bestaat dus echt. Uit onderzoek is namelijk gebleken dat een groep mensen die heel veel
                kilo's waren afgevallen een veel lager onderhoudsniveau in calorie&euml;n hadden dan een groep mensen die
                op al op datzelfde gewicht zaten zonder af te vallen. Dit verschil liep tot wel bijna 700 kcal. Dit
                betekende dus dat de groep mensen die heel veel kilo's waren afgevallen veel minder mochten eten en/of
                moesten bewegen om op gewicht te blijven dan de mensen die al op dat gewicht waren. Dat is dus het
                effect van de spaarstand van het lichaam.
            </p>
            <p>
                Als je snel veel gewicht gaat verliezen zal het lichaam ook sneller in deze spaarstand komen. Daardoor
                loop je dus tegen muur aan, doordat je onderhoud dusdanig laag word dat je heel veel moet doen om verder
                af te vallen of &uuml;berhaupt op gewicht te kunnen blijven. Op de lange termijn zal dit voor de meeste
                personen niet vol te houden zijn, waardoor zij ook weer veel kilo's zullen gaan aankomen.
            </p>
            <h2>Hoeveel gewicht kan ik dan het beste afvallen?</h2>
            <p>
                Wij raden aan om ongeveer 0,5% &aacute; 1% lichaamsgewicht per week af te vallen. Op het begin mag dit
                boven deze percentages liggen, omdat er dan veel vochtverlies optreed. Dit verlies heeft geen nadelige
                effecten op de spaarstand zoals hierboven besproken. Na een paar weken zal het gewichtsverlies dan
                tussen deze percentages moeten liggen. Val je teveel af? Dan kun je het beste je calorie&euml;n iets
                verhogen zodat je niet teveel gaat afvallen. Val je te weinig af? Dan kun je je calorie inname iets
                verlagen zodat je meer afvalt.
            </p>
            <p>
                Belangrijk daarbij is dat je je goed blijft voelen. Als je merkt dat je weinig energie hebt kun je beter
                je calorie inname iets verhogen zodat je wel blijft afvallen, maar je er niet futlozer door gaat voelen.
                Uiteindelijk is jezelf prettiger voelen voor de meeste het echte hoofddoel en is afvallen daarvoor een
                middel.
            </p>
        </BlogPost>
    )
}
