import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function Cla({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE – Personal Training Uden en Schijndel komt weer met een nieuwe blog. In deze blog gaan we het
                hebben over geconjugeerd linolzuur oftewel CLA. Dit populaire supplement wordt vaak gebruikt om extra
                gewicht te verliezen maar wat is er waar van deze theorie?
            </p>
            <h2>Wat is CLA?</h2>
            <p>
                CLA is een meervoudige onverzadigde omega 6 vetzuur. Ze zijn te vinden in zowel plantaardige als
                dierlijke producten. Er zijn 28 soorten CLA die worden onderscheiden door de verschillende dubbele
                binding die elke vetzuur bevat. CLA is de afkorting van Conjugated Linoleic Acid. Het is een essentieel
                vetzuur waardoor je dit dient binnen te krijgen via je voeding of suppletie.
            </p>
            <h2>In welke producten zit CLA?</h2>
            <p>
                CLA zit in verschillende producten maar voornamelijk in vlees en koemelk. Afhankelijk van hoe deze
                dieren hebben geleefd is er een hoeveel CLA aanwezig in deze producten. De gemiddelde inname van vrouwen
                ligt op 151 mg per dag en bij mannen op 212 mg per dag. CLA kan ook worden gehaald uit supplementen.
                Deze vorm van CLA is afkomstig uit plantaardige oliën.
            </p>
            <h2>Is CLA de wonderpil?</h2>
            <p>
                Onderzoekers kwamen erachter dat CLA kon helpen om het lichaamsvet te doen laten dalen. Onderzoek op
                muizen laat zien dat CLA zorgt voor een lagere voedselinname, een hogere vetverbranding en stimulatie
                voor afbraak van vet (West, 2000). Op menselijke studies lieten veel onderzoeken dit effect helaas niet
                tot nauwelijks zien. Bij onderzoeken dat vetverlies vaststelde gebeurde dit voornamelijk in de eerste
                vijf maanden waarbij 0,1 kg per week wordt verloren. Hierdoor kunnen we concluderen dat CLA geen
                wonderpil is en het opnieuw voornamelijk aankomt op{' '}
                <a href="/blogs/bulken-en-cutten">bulken en cutten</a> met elkaar te wisselen om een atletisch lichaam
                te realiseren.
            </p>
            <h2>Bestaat er überhaupt een wonderpil?</h2>
            <p>
                Supplementen blijven een toevoeging aan je dagelijkse voeding. Supplementen zoals{' '}
                <a href="/blogs/omega-3-vetzuren">omega 3 vetzuren</a>,{' '}
                <a href="/blogs/werking-creatine">creatine</a> en CLA kunnen bijdragen aan het complete plaatje maar
                zijn niet het wondermiddel waar het omdraait. Uiteindelijk is de basis: gezond eten en frequent bewegen
                gecombineerd met een flinke dosis discipline het geheim van een fysieke transformatie. Zorg er daarnaast
                voor dat je genoeg <a href="/blogs/slaaptekort-inhalen">slaapt</a> en dat je{' '}
                <a href="/blogs/cardio-of-krachttraining">krachttraining</a> dominant aanwezig laat zijn in je
                trainingsschema.
            </p>
            <h3>Bibliografie</h3>
            <p>
                West, D. B. (2000, oktober 30). Opgehaald van{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/11015475/" rel="noopener">
                    https://pubmed.ncbi.nlm.nih.gov/11015475/
                </a>
            </p>
        </BlogPost>
    )
}
