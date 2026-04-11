import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function GenetischeAanleg({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE Personal Training Uden en Schijndel komt met een nieuwe blog. In deze blog behandelen we het
                onderwerp genetisch aanleg. Na het lezen van deze blog weet je of de verhalen van invloed door genetica
                op je vet of spier waar zijn of fabels. Wanneer bij het volgende feestje je tante weer tegen je zegt
                'bij ons zit het in de familie' dan denk je terug aan deze blog!
            </p>
            <h2>Potentie door gunstige genen</h2>
            <p>
                Hoewel je het waarschijnlijk niet wil lezen is bij je geboorte al voor een groot deel bepaald wat je
                potentie is in spiermassa en spierkracht. Onderzoeken tonen aan dat ongeveer 50% van je potentie bepaald
                is door je genen (Zempo, 2016). Dit zorgt voor de uitspraken zoals 'hij hoeft maar een dumbell aan te
                raken en begint al met groeien' of 'zij heeft nog nooit getraind maar heeft billen waar ik al jaren voor
                train'. Hoe frustrerend het ook kan zijn we kunnen er niet omheen dat genen een belangrijke rol spelen
                in dit proces.
            </p>
            <h2>(Non) responders</h2>
            <p>
                Ook bestaat er een vorm van non-responders en responders. Dit is een term die aangeeft in welke mate je
                lichaam reageert op een prikkel. Wanneer je samen met je beste vriend een half jaar traint, exact
                dezelfde oefeningen, herhalingen en gewichten doet betekent dit nog niet dat jullie dezelfde groei
                doormaken. Onze genen zorgen ervoor dat je of je vriend beter zal reageren op de prikkel dan de ander,
                los van factoren zoals voldoende eten van voeding of genoeg rust.
            </p>
            <h2>Verschillende soorten spiervezels</h2>
            <p>
                Ons lichaam bevat grofweg drie soorten skeletspieren: type I, type II (A) en type II (B). De type I
                vezels is de langzame vezel die voornamelijk effectief is bij duursporten, ook wel rode spiervezel
                genoemd. Type II vezels zijn de snelle spiervezels die voornamelijk effectief zijn in korte, krachtige
                inspanningen zoals powerliften of 100 meter sprint, ook wel witte vezels genoemd.
            </p>
            <p>
                Hoe deze verhouding is in je lichaam is ook weer voor een groot deel genetisch bepaald. Dit is de reden
                waarom je jarenlang traint op de 100 meter sprint, vervolgens komt er een Jamaicaan die nooit heeft
                getraind en het licht uit je ogen rent. Zij hebben vaak vanuit hun genetica meer aanleg voor snelheid.
                Een ander voorbeeld is dat je al jaren traint om 200 kg te kunnen tillen bij een deadlift en vervolgens
                komt er iemand die zonder te trainen 210 kg op kan tillen.
            </p>
            <h2>Laat je niet demotiveren!</h2>
            <p>
                Hoewel genetische aanleg een belangrijke rol speelt in de potentie van je groei in spiermassa en kracht
                blijven factoren zoals voeding, rust en doorzettingsvermogen ook belangrijk. Wanneer je niet die aanleg
                hebt zoals je vriend of vriendin is het nog niet uitgesloten dat je meer kan bereiken. Laat je niet
                demotiveren en train elke keer alsof je leven ervan af hangt. Focus vooral op je eigen resultaten zodat
                dit ieder jaar weer verbeteren. Zet hem op!
            </p>
            <h3>Bibliografie</h3>
            <p>
                Zempo, H. (2016, November 23). Opgehaald van Wiley Online Library:{' '}
                <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/sms.12804" rel="noopener">
                    https://onlinelibrary.wiley.com/doi/abs/10.1111/sms.12804
                </a>
            </p>
        </BlogPost>
    )
}
