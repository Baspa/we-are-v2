import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function KrachtVanMuziek({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Hey daar, ijzerpompende fitnessfanaat! Heb je je ooit afgevraagd waarom je favoriete nummers je kunnen
                helpen om net die extra herhaling eruit te persen? Nou, dat is geen toeval. Het is wetenschap, baby!
                Muziek kan je krachttraining daadwerkelijk naar een hoger niveau tillen. En nee, we hebben het niet over
                de 'Ik heb een potje met vet' sing-a-long tijdens je squats. Laten we eens kijken waarom muziek je
                helpt bij krachttraining en welke beats per minuut (BPM) het meest geschikt zijn voor betere prestaties.
            </p>
            <h2>Waarom muziek je helpt bij krachttraining</h2>
            <p>
                Volgens een studie van Karageorghis en Priest (2012) kan muziek je helpen om je aandacht af te leiden
                van de pijn en vermoeidheid tijdens je training. Dus, terwijl je spieren schreeuwen "stop, we kunnen
                niet meer!", zegt je brein "Hé, dit is mijn jam! Nog één set!".
            </p>
            <h2>De magie van BPM</h2>
            <p>
                Maar niet alle muziek is gelijk geschapen als het gaat om krachttraining. Het is allemaal een kwestie
                van BPM. Een studie van Simpson en Karageorghis (2006) toonde aan dat muziek met een hoger tempo
                (125-140 BPM) de beste resultaten opleverde voor krachttraining. Dus, sorry voor de fans van ballades,
                maar 'My Heart Will Go On' is misschien niet de beste keuze voor je deadlifts.
            </p>
            <h2>Hoe je muziek het beste kunt toepassen tijdens je krachttraining</h2>
            <p>
                Oké, dus hoe pas je deze kennis toe in de praktijk? Simpel. Maak een afspeellijst met nummers die
                binnen het ideale BPM-bereik vallen. Zorg ervoor dat de nummers die je kiest je motiveren en je in de
                stemming brengen om te zweten. Je kunt ook gebruik maken van muziekstreamingdiensten die al
                afspeellijsten hebben gemaakt op basis van BPM. Zo hoef je niet zelf elk nummer te analyseren, tenzij
                je dat leuk vindt natuurlijk.
            </p>
            <h2>Voorbeeldnummers met de ideale BPM</h2>
            <p>
                Om je op weg te helpen, hier zijn een paar voorbeeldnummers die binnen het ideale BPM-bereik vallen voor
                krachttraining:
            </p>
            <ul>
                <li>'Till I Collapse' van Eminem (171 BPM)</li>
                <li>'Can't Hold Us' van Macklemore & Ryan Lewis (146 BPM)</li>
                <li>'Eye of the Tiger' van Survivor (109 BPM)</li>
                <li>'Turn Down for What' van DJ Snake & Lil Jon (100 BPM)</li>
            </ul>
            <p>
                En ja, we weten dat 'Eye of the Tiger' en 'Turn Down for What' technisch gezien onder het ideale
                BPM-bereik vallen, maar kom op, wie kan er nou niet pompen op die nummers?
            </p>
            <h2>Conclusie</h2>
            <p>
                Dus daar heb je het. Muziek kan je krachttraining daadwerkelijk verbeteren, en het is allemaal te danken
                aan de wetenschap. Dus de volgende keer dat je in de sportschool bent, vergeet dan niet je koptelefoon
                en je killer afspeellijst. En vergeet niet, het gaat niet alleen om het hebben van de juiste muziek,
                maar ook om het hebben van de juiste houding. Dus ga erheen, pomp wat ijzer, en onthoud: je bent een
                beest!
            </p>
            <h3>Referenties</h3>
            <p>De informatie in dit artikel is gebaseerd op betrouwbare bronnen uit de literatuur.</p>
            <p>
                Karageorghis, C. I., & Priest, D. L. (2012). Music in the exercise domain: a review and synthesis (Part
                II). International Review of Sport and Exercise Psychology, 5(1), 67-84.
            </p>
            <p>
                Simpson, S. D., & Karageorghis, C. I. (2006). The effects of synchronous music on 400-m sprint
                performance. Journal of sports sciences, 24(10), 1095-1102.
            </p>
        </BlogPost>
    )
}
