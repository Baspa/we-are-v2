import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function AfvallenEnOvergang({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE – personal training Uden en Schijndel komt met een nieuwe blog. We krijgen veel vragen van
                vrouwen die in de overgang zitten. Het afvalproces gaat moeizaam en ze weten niet wat te doen. In deze
                blog lees je er meer over!
            </p>
            <h2>Wat is de overgang?</h2>
            <p>
                De overgang is de periode van de laatste menstruatie. Na deze periode is het niet meer mogelijk om een
                eisprong te krijgen en geen baarmoederslijmvlies meer wordt aangemaakt. Dit alles komt door de hormonale
                veranderingen in deze periode, ook wel menopauze genoemd. Vrouwen in de overgang merken dit vaak door
                zweetaanvallen, opvliegers en dat de weegschaal opeens niet meer doet wat je wilt! De overgang kan
                enkele jaren duren tot je allerlaatste menstruatie is geweest.
            </p>
            <h2>Waarom heeft deze veel invloed op je gewicht?</h2>
            <p>
                De belangrijkste reden zijn de hormonale veranderingen tijdens deze periode. Progesteron neemt af wat
                betekent dat je schildklier trager gaat werken. Daarnaast verandert de vetverdeling over het lichaam.
                Veel vrouwen zullen merken dat hun 'muffin-topping' toenemen. Het randje vet boven je broek. Een andere
                reden is dat oestrogeen afneemt in het lichaam. Het lichaam heeft dit hormoon wel nodig en wordt
                aangemaakt in een andere vorm van het lichaam: vet! Om ervoor te zorgen dat het lichaam nog genoeg
                oestrogeen aanmaakt zullen vrouwen merken dat het afvallen moeilijker wordt dan ooit tevoren. De laatste
                reden die we allemaal ervaren is dat naarmate we ouder worden we steeds meer spiermassa verliezen. Hoe
                minder spiermassa we hebben, hoe minder we verbranden in rusttoestand.
            </p>
            <h2>Wat helpt in deze periode?</h2>
            <p>
                Voordat we een aantal adviezen gaan geven is het belangrijk om te beseffen dat de overgang bij het vrouw
                zijn hoort. Het is een natuurlijk proces waar je niet onderuit komt. Zie het al een nieuwe fase van het
                leven en omarm het.
            </p>
            <p>
                Wanneer je in deze periode zit hebben we een aantal adviezen voor je om het afvallen makkelijker te
                maken:
            </p>
            <ol>
                <li>
                    Pas je voeding aan: zorgt ervoor dat je een calorietekort zit. Mogelijk is{' '}
                    <a href="/blogs/intermittent-fasting">intermittent fasting</a> een manier voor je die in deze periode
                    goed werkt!
                </li>
                <li>
                    Doe meer krachttraining dan duursporten of cardio.{' '}
                    <a href="/blogs/cardio-of-krachttraining">Krachttraining</a> heeft namelijk een zeer positief effect
                    op je hormonale balans. Daarnaast verbrand het meer calorie&euml;n op lange termijn dan cardio.
                </li>
                <li>
                    Vermijd producten zoals alcohol. Alcohol bevat namelijk zeven calorie&euml;n per gram. Daarnaast
                    verstoort het je herstelvermogen.
                </li>
                <li>
                    Gebruik <a href="/blogs/omega-3-vetzuren">omega 3 vetzuren</a> als suppletie. Deze vorm van
                    suppletie heeft een positief effect op de overgang. Daarnaast is het slikken van extra zink en Multi
                    vitamine een goed idee.
                </li>
                <li>
                    Eet als een holbewoner. Dit betekent dat alles wat rent, zwem of vliegt gegeten kan worden. Alles wat
                    bewerkt is, is niet geschikt!
                </li>
            </ol>
        </BlogPost>
    )
}
