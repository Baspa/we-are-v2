import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function SportenMetReuma({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Meer dan 2 miljoen mensen in Nederland hebben last van reuma. Vaak denken mensen dat krachttraining niet
                mag als je reuma hebt. Dit zou immers slecht zijn voor je gewrichten. De vraag is echter of dit wel juist
                is.
            </p>
            <h2>Wat is reuma?</h2>
            <p>
                Er zijn heel veel verschillende soorten reuma. Reuma is een aandoening waarbij je last hebt van je
                spieren, botten, pezen en/of gewrichten. Een van de meest voorkomende vorm van reuma is reumato&iuml;de
                artritis. In 2020 zouden er bijna 220.000 mensen in Nederland last hebben van reumato&iuml;de artritis.
            </p>
            <p>
                Reumato&iuml;de artritis is een vorm van ontstekingsreuma. Hierbij treden er ontstekingen op in de
                gewrichten. Naast Reumato&iuml;de artritis zijn er nog meerdere vormen van ontstekingsreuma, waarbij
                ontstekingen kunnen optreden in de gewrichten, spieren, banden en pezen.
            </p>
            <p>
                De meest voorkomende vorm van reuma in Nederland is artrose. Dit noemen we ook wel slijtagereuma. Dit
                treedt op als je kraakbeen (deels) verdwenen is. Hierdoor krijg je bot-op-bot contact, wat kan zorgen
                voor een ontsteking in het gewricht. Meer dan 1,1 miljoen Nederlanders zouden last hebben van artrose.
            </p>
            <h2>Is sporten niet slecht voor reuma?</h2>
            <p>
                Dit is wat heel veel mensen denken. Echter is het zo dat uit onderzoek blijkt dat krachttraining juist
                een positieve werking kan hebben.
            </p>
            <p>
                Krachttraining heeft namelijk twee voordelen tegen reuma. Ten eerste heeft krachttraining een remmend
                effect op het verlies van kraakbeen volgens een onderzoek uit 2017[1]. Dit heeft dus een positieve
                werking bij het tegengaan van artrose.
            </p>
            <p>
                Ten tweede kwam uit het onderzoek naar voren dat krachttraining ook nog eens een ontstekingsremmende
                werking heeft. Dit heeft dus effect op alle soorten van reuma. Door de ontstekingsremmende werking zorgt
                krachttraining dus voor pijnverlichting.
            </p>
            <p>
                Uit ander onderzoek bleek ook nog eens dat krachttraining en andere fysieke activiteiten de stijfheid in
                de gewrichten verminderen [2]. Daarnaast kwam hierin ook nog voren dat er een positieve werking was op
                het verminderen van vermoeidheid. Dit is ook van een van de voorkomende symptomen van reuma.
            </p>
            <h2>Kan je dan gewoon trainen met reuma?</h2>
            <p>
                Ja, je kunt gebruik maken van krachttraining als je reuma hebt. Let hierbij wel op je eigen lichaam.
                Zoals hierboven heeft krachttraining op verschillende facetten een positief effect op reuma. Dit betekent
                echter niet dat je maar zo veel en hard mogelijk moet gaan trainen.
            </p>
            <p>
                Het is niet bekend welke intensiteit optimaal is voor deze positieve effecten. Voor nu lijkt een
                intensiteit tussen 50% en 75% het meest optimale hiervoor. Dit betekent dat je wel krachttraining kunt
                gebruiken en je je niet hoeft tegen te laten houden door reuma om je droomfysiek te kunnen bereiken.
            </p>
            <p>
                Ervaar je na een tijdje toch meer spierpijn en/of gewrichtspijn? Zorg er dan voor dat je de intensiteit
                van de training verlaagd, of dat je meer rust neemt na en tussen de trainingen. Reuma komt in vele maten
                en vormen voor, dus per persoon zal het optimale gebruik van krachttraining verschillen. Luister goed
                naar je lichaam. Hiermee kun je toch gebruik blijven maken van krachttraining.
            </p>
            <p>
                [1] Pereira Nunes Pinto, A. C., Natour, J., de Moura Castro, C. H., Eloi, M., &amp; Lombardi Junior,
                I. (2017). Acute effect of a resistance exercise session on markers of cartilage breakdown and
                inflammation in women with rheumatoid arthritis. International journal of rheumatic diseases.
            </p>
            <p>
                [2] Lourenzi, F. M., Jones, A., Pereira, D. F., Santos, J. H. C. A. D., Furtado, R. N. V., &amp;
                Natour, J. (2017). Effectiveness of an overall progressive resistance strength program for improving the
                functional capacity of patients with rheumatoid arthritis: a randomized controlled trial. Clinical
                Rehabilitation, 0269215517698732.
            </p>
        </BlogPost>
    )
}
