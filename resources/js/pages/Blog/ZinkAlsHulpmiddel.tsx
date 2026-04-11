import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function ZinkAlsHulpmiddel({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE Personal Training Uden en Schijndel komt met een nieuwe blog. Al eerder bespraken we supplementen
                zoals <a href="/blogs/cla">CLA</a>, <a href="/blogs/pre-workout">pre-workout</a> en{' '}
                <a href="/blogs/omega-3-vetzuren">omega 3 vetzuren</a>. Vandaag duiken we dieper in op zink om erachter
                te komen of zink een hulpmiddel is of overbodig. Lees je met ons mee?
            </p>
            <h2>Om te beginnen: wat is zink?</h2>
            <p>
                Zink is een spoorelement dat betrokken is bij veel processen in het lichaam. Het is een noodzakelijk
                spoorelement voor verschillende enzymen. Zonder zink kunnen deze enzymen niet hun werk doen wat maakt dat
                zink belangrijk is voor je algemene gezondheid. Zink is nodig voor o.a. opbouw van{' '}
                <a href="/blogs/het-belang-van-eiwitten">eiwitten</a> en de ontwikkeling van (spier)weefsel. Daarnaast
                helpt zink het immuunsysteem te versterken en verhoogt het je testosteron productie.
            </p>
            <h2>Hoe krijg je zink binnen?</h2>
            <p>
                Zink zit o.a. in vlees, kaas, graanproducten, noten en schelpdieren zoals garnalen en mosselen.
                Belangrijk is om voldoende zink te halen uit je voeding. Mannen hebben ongeveer 20 mg per dag nodig en
                vrouw 14 mg per dag met uitzondering van de{' '}
                <a href="/blogs/sporten-tijdens-en-na-zwangerschap">zwangere vrouwen</a>. Zij hebben een verhoogd aantal
                zink nodig van 19 mg per dag (Lukaski, 1995). Producten die veel zink bevatten, per 100 gram zijn o.a.
                oesters, varkenslever, rundergehakt en walnoten.
            </p>
            <h2>Kan je teveel zink binnen krijgen?</h2>
            <p>
                Het is mogelijk om teveel zink binnen te krijgen. Belangrijk is hierop te letten omdat een teveel aan
                zink ervoor zorgt dat je een koper tekort krijgt wat kan veroorzaken dat je afname van rode bloedcellen
                ziet. Signalen die wijzen op een koper tekort zijn o.a. snel en veel blauwe blekken krijgen en een
                slechte groei doormaken.
            </p>
            <h2>Is het nodig om zink te supplementeren?</h2>
            <p>
                Wanneer je een gevarieerd voedingspatroon hebt waar voldoende{' '}
                <a href="/blogs/sporten-tijdens-en-na-zwangerschap">vlees</a> en vis in terug te zien is betekent dit
                dat je de aanbevolen hoeveelheid zink binnenkrijgt. Wanneer je vegetariër bent is het nodig om zink te
                supplementeren omdat deze groep niet voldoende vlees en vis eet.
            </p>
            <h2>Conclusie: hulpmiddel of overbodig?</h2>
            <p>
                Zink is een belangrijk spoorelement en vormt een belangrijk hulpmiddel voor veel processen in je lichaam.
                Het voldoende binnenkrijgen is dus essentieel voor je algemene gezondheid! Zorg ervoor dat je voldoende
                zink binnen krijgt zoals de aanbevolen hoeveelheden hierboven omschreven. Dit doe je door voldoende
                vlees en vis te eten. Mocht je weinig tot geen vlees en vis eten in je voedingspatroon dan is het
                verstandig om te supplementeren.
            </p>
            <h3>Bibliografie</h3>
            <p>
                Lukaski, H. C. (1995, Juni 5). Opgehaald van Pubmed:{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/7550259/" rel="noopener">
                    https://pubmed.ncbi.nlm.nih.gov/7550259/
                </a>
            </p>
        </BlogPost>
    )
}
