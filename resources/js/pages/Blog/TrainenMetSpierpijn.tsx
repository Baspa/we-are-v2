import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function TrainenMetSpierpijn({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Je hebt een hele zware workout gedaan waarvan je dagenlang nog last hebt. Het is inmiddels een paar dagen
                later en je was eigenlijk van plan om weer te gaan trainen. Is dit dan wel verstandig als je nog
                spierpijn hebt van de vorige training?
            </p>
            <h2>Wat is spierpijn?</h2>
            <p>
                Allereerst zijn er verschillende soorten spierpijn. Je hebt namelijk vroege- en verlate spierpijn. Deze
                hebben andere oorzaken en daarom zullen we deze apart uitleggen.
            </p>
            <p>
                Vroege spierpijn ontstaat tijdens het sporten. Bij een intensieve inspanning is er veel energie nodig.
                Bij het verbranden van energie komen afvalstoffen zoals melkzuur vrij in de spieren. Bij een te hoge of
                lange intensieve inspanning kunnen die afvalstoffen niet meer afgevoerd worden. Hierdoor treed verzuring
                op. Ken je het gevoel dat je spieren als harde bakstenen voelen? Dat noemen we dus vroege spierpijn.
            </p>
            <p>
                Verlate spierpijn zul je veelal voelen 24 &aacute; 48 uur na de training. Deze word ook wel DOMS
                genoemd, wat staat voor delayed onset of muscle fatigue. Dit is de spierpijn die je de dagen na de
                training voelt. Deze ontstaat doordat er minuscule spierscheurtjes ontstaan in het bindweefsel van de
                spieren. Hierdoor ontstaat verlate spierpijn. Deze scheurtjes moeten weer hersteld worden door het
                lichaam. Dit zorgt ervoor dat de spieren weer sterker worden.
            </p>
            <h2>Kun je spierpijn voorkomen?</h2>
            <p>
                Er zijn manieren voor om te gaan met spierpijn, maar helemaal voorkomen is bijna niet mogelijk. Zo helpt
                een goede warming-up voor de training. Tijdens het trainen is het belangrijk om voldoende water te
                drinken. Dit zorgt ervoor dat de afvalstoffen beter kunnen worden afgevoerd. Verder kun je na de training
                rekoefeningen of een cooling down doen. Een massage of warme douche na de training zou de spierpijn ook
                licht kunnen verminderen. Dit zorgt namelijk voor een betere doorbloeding van de spieren.
            </p>
            <p>
                Ook voeding speelt een belangrijke rol bij het verminderen van de spierpijn. De verlate spierpijn
                ontstaat dus door minuscule spierscheurtjes. Om deze te herstellen heeft je lichaam eiwitten nodig. Zorg
                er dus voor dat je voldoende eiwitten binnenkrijgt.
            </p>
            <h2>Kun je trainen met spierpijn?</h2>
            <p>
                Als je nog verlate spierpijn ervaart betekent dit dat er nog scheurtjes aanwezig zijn in de spieren. Dan
                zou je zeggen dat het niet verstandig is om weer te gaan trainen. Dit is niet helemaal waar. Het kan
                juist goed zijn om weer te gaan trainen als je nog lichte spierpijn hebt. Deze training stimuleert de
                doorbloeding wat goed is voor het spierherstel.
            </p>
            <p>
                Als je weer gaat trainen is het wellicht verstandig om iets lichtere gewichten te gebruiken of eventueel
                de spiergroepen te trainen waar je geen spierpijn ervaart. Zo blijf je actief bezig en krijgt je lichaam
                tegelijkertijd nog voldoende rust om te herstellen.
            </p>
            <p>
                Spierpijn zal op het begin van een trainingsschema het ergste zijn. Na verloop van tijd zal de spierpijn
                steeds minder worden. Blijf je toch veel last houden van verlate spierpijn? Dan kan het zijn dat je
                bepaalde spiergroepen te vaak in de week traint en ze daardoor onvoldoende tijd hebben om te kunnen
                herstellen. Pas in dit geval je trainingsschema aan zodat je de spiergroepen twee of drie keer in de
                week traint. In dat geval zal er voldoende tijd zijn voor je spieren om te herstellen.
            </p>
        </BlogPost>
    )
}
