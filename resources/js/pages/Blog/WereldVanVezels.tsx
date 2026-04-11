import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function WereldVanVezels({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Oké, laten we eerlijk zijn: vezels zijn niet het meest sexy onderwerp om over te praten. Maar het zijn
                wel kleine superhelden die in je eten rondhangen en je lichaam helpen om als een geoliede machine te
                werken. Dus laten we wat meer leren over deze onzichtbare vrienden, zodat we ze wat meer waardering
                kunnen geven!
            </p>
            <h2>Wat zijn vezels eigenlijk?</h2>
            <p>
                Vezels zijn een soort koolhydraten die je lichaam niet kan verteren. Ze reizen door je lichaam, maken
                een beetje een puinhoop, en verlaten dan het pand zonder een fooi achter te laten (niet echt beleefd,
                maar we hebben ze nog steeds nodig). Er zijn twee soorten vezels: oplosbare vezels, die water opnemen en
                een soort gel vormen die helpt bij de spijsvertering, en onoplosbare vezels, die helpen om dingen in
                beweging te houden in je spijsverteringsstelsel (Anderson, Baird, Davis Jr, Ferreri, Knudtson, Koraym,
                Waters, & Williams, 2009).
            </p>
            <h2>Waarom zijn vezels zo geweldig?</h2>
            <p>
                Vezels zijn de onbezongen helden van de voedingswereld. Ze helpen niet alleen bij de spijsvertering,
                maar kunnen ook het risico op hartaandoeningen verminderen, je helpen om je gewicht onder controle te
                houden en je bloedsuikerspiegel stabiel te houden (Anderson et al., 2009). En als dat nog niet genoeg
                is, kunnen ze ook helpen om je cholesterolgehalte te verlagen. Kortom, vezels zijn de vriend die je
                altijd al wilde hebben, maar nooit wist dat je nodig had.
            </p>
            <h2>Hoeveel vezels heb je nodig?</h2>
            <p>
                Volgens de Voedingsraad (2015) zou je dagelijks ongeveer 30 tot 40 gram vezels moeten binnenkrijgen.
                Maar laten we eerlijk zijn, de meesten van ons halen dat niet. Dus hoe kun je meer vezels in je dieet
                krijgen? Het is eigenlijk vrij eenvoudig: eet meer groenten, fruit, volkoren producten en bonen. En als
                je echt avontuurlijk bent, kun je zelfs wat lijnzaad aan je ochtendyoghurt toevoegen. Je darmen zullen
                je dankbaar zijn!
            </p>
            <h2>Waar vind je vezels?</h2>
            <p>
                Vezels zijn overal om ons heen (nou ja, in ons eten dan). Ze zitten in groenten en fruit, volkoren
                producten, bonen, noten en zaden. Sommige voedingsmiddelen, zoals chiazaad en lijnzaad, zijn echte
                vezelbommen. Maar ook in minder voor de hand liggende producten, zoals popcorn en aardappelen, zitten
                veel vezels (Slavin, 2008). Dus de volgende keer dat je een filmavond plant, sla dan de chips over en
                ga voor de popcorn. Je lichaam zal je dankbaar zijn!
            </p>
            <h2>Conclusie</h2>
            <p>
                Vezels zijn misschien niet het meest glamoureuze onderwerp, maar ze zijn wel super belangrijk voor onze
                gezondheid. Dus laten we ze wat meer liefde geven en ervoor zorgen dat we er genoeg van binnenkrijgen.
                Want zoals het oude gezegde luidt: een vezel per dag houdt de dokter weg (oké, dat is misschien niet het
                exacte gezegde, maar je snapt het idee).
            </p>
            <h3>Bibliografie</h3>
            <p>De informatie in dit artikel is gebaseerd op betrouwbare bronnen uit de literatuur.</p>
            <p>
                Anderson, J. W., Baird, P., Davis Jr, R. H., Ferreri, S., Knudtson, M., Koraym, A., Waters, V., &
                Williams, C. L. (2009). Health benefits of dietary fiber. Nutrition reviews, 67(4), 188-205.
            </p>
            <p>
                Slavin, J. (2008). Position of the American Dietetic Association: health implications of dietary fiber.
                Journal of the American Dietetic Association, 108(10), 1716-1731.
            </p>
            <p>Voedingsraad. (2015). Richtlijnen goede voeding 2015. Den Haag: Voedingsraad.</p>
        </BlogPost>
    )
}
