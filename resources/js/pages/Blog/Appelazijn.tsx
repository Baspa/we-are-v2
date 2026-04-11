import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function Appelazijn({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                WE ARE – personal training Uden en Schijndel komt weer met een nieuwe blog. Dit keer gaan we het hebben
                over het consumeren van appelazijn. Wat zegt de wetenschap over appelazijn en wat doet het met onze
                gezondheid?
            </p>
            <h2>Appelazijn, wat is het?</h2>
            <p>
                Wanneer appels worden gemalen en gecombineerd met gist is de eerste stap gezet naar appelazijn. Suikers
                worden in deze stap omgezet naar alcohol. Om dit weer te veranderen naar azijnzuur worden er de daarvoor
                bestemde bacteriën aan toegevoegd. Appelazijn bestaat voor ongeveer 6% uit dit azijnzuur. De stoffen die
                we terugvinden in appelazijn hebben volgens de wetenschap een effectieve anti-oxidant werking.
            </p>
            <h2>Wat zijn de voordelen van appelazijn?</h2>
            <p>
                Verschillende wetenschappelijke studies hebben aangetoond dat appelazijn een effectief product is voor je
                gezondheid. Zo kan appelazijn de bloedsuikerspiegel verlagen, schadelijke stoffen en virussen aanpakken
                in het lichaam en helpt het bij de zuurgraad van het lichaam. Uit eigen ervaringen kunnen we melden dat
                we al verschillende keren hebben meegemaakt dat het consumeren van appelazijn het eczeem, dat al jaren
                aanwezig was, bij onze leden heeft doen laten verdwijnen. Dit heeft waarschijnlijk te maken dat het
                appelazijn het lichaam 'verschoont' waardoor de restanten worden opgeruimd. Hierdoor krijgen deze
                restanten geen kans om ontstekingen te veroorzaken.
            </p>
            <h2>Helpt appelazijn bij het afvallen?</h2>
            <p>Appelazijn werkt niet direct maar wel indirect bij het afvallen. Dit heeft te maken met twee oorzaken:</p>
            <ol>
                <li>Appelazijn vertraagt het legen van de maag waardoor je langer verzadigd bent</li>
                <li>
                    Appelazijn verbetert de controle over het hormoon insuline waardoor je minder snel honger ervaart.
                </li>
            </ol>
            <p>
                Dit zorgt er indirect voor dat je minder eet en minder snel honger hebt waardoor je sneller in een
                calorietekort zit en blijft. Dit calorietekort is belangrijk wanneer je graag gewicht wilt verliezen.
            </p>
            <h2>Dus nu direct naar de winkel?</h2>
            <p>
                Pas op want appelazijn is product met een hoge zuurgraad. Door deze hoge zuurgraad tast het je tanden en
                slokdarm aan als je er niet gedoseerd mee om gaat. Belangrijk is om maximaal twee eetlepels appelazijn
                te nemen per dag die je verdund met water. Bij voorkeur drink je de appelazijn met een rietje zodat het
                zo min mogelijk tegen je tanden aankomt. Daarnaast kan meer dan twee eetlepels appelazijn per dag zorgen
                voor brandend maagzuur. Bij voorkeur dient appelazijn uit een glazen fles te komen in plaats van plastic
                en dient het meer geel dan wit te zijn.
            </p>
        </BlogPost>
    )
}
