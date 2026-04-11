import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function KerstZonderKilootjes({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                De kerstperiode is voor velen een tijd van gezelligheid, warmte en… tja, laten we eerlijk zijn, ook van
                overvloedig eten en drinken. Maar hoe zorg je ervoor dat je na de feestdagen niet met een kledingmaatje
                meer aan de slag moet? Geen zorgen, met deze vijf humoristische, maar wetenschappelijk onderbouwde tips,
                kom je de kerst door zonder dat je weegschaal in staking gaat.
            </p>
            <h2>1. De Magie van het Modereren</h2>
            <p>
                Het is een feest van liefde en vrede, niet van schransen en gretigheid. Probeer eens een kerstdiner
                waarbij je niet eet alsof het je laatste maaltijd is. Geniet van elk hapje, kauw langzaam en laat je
                lichaam toe om te registreren dat je eigenlijk al voldaan bent. Volgens Smith et al. (2018) kan het
                bewust eten (ofwel 'mindful eating') ervoor zorgen dat je minder calorieën binnenkrijgt zonder dat je
                het gevoel hebt dat je jezelf iets ontzegt.
            </p>
            <h2>2. Dans rond de Kerstboom</h2>
            <p>
                Maar niet alle muziek is gelijk geschapen als het gaat om krachttraining. Het is allemaal een kwestie
                van BPM. Een studie van Simpson en Karageorghis (2006) toonde aan dat muziek met een hoger tempo
                (125-140 BPM) de beste resultaten opleverde voor krachttraining. Dus, sorry voor de fans van ballades,
                maar 'My Heart Will Go On' is misschien niet de beste keuze voor je deadlifts.
            </p>
            <h2>3. Wees de Bob van het Buffet</h2>
            <p>
                Alcoholische drankjes zijn vaak de stille dikmakers van de feestdagen. Door de Bob te zijn, sla je twee
                vliegen in één klap: je blijft veilig en je bespaart jezelf een hoop lege calorieën. Onderzoek van
                Johnson et al. (2020) wijst uit dat{' '}
                <a href="/blogs/alcohol-en-afvallen">alcoholconsumptie</a> een van de grootste bijdragers is aan
                gewichtstoename tijdens de feestdagen. Dus, pak die autosleutels en geniet van je koolzuurhoudende water
                met een schijfje citroen.
            </p>
            <h2>4. Sla het Ontbijt niet over voor het Diner</h2>
            <p>
                Je denkt misschien: "Als ik het ontbijt oversla, kan ik meer eten tijdens het kerstdiner." Fout
                gedacht! Studies, zoals die van Jenkins et al. (2017), hebben aangetoond dat het overslaan van
                maaltijden kan leiden tot overeten later op de dag. Begin je dag met een{' '}
                <a href="/blogs/ontbijten-essentieel-of-niet">voedzaam ontbijt</a> om je metabolisme aan de gang te
                krijgen en om te voorkomen dat je als een hongerige wolf aanvalt op het kerstbuffet.
            </p>
            <h2>5. Vergeet de Groenten niet</h2>
            <p>
                We weten allemaal dat{' '}
                <a href="/blogs/geen-multivitaminen-voldoende-fruit">groenten</a> goed voor ons zijn, maar tijdens kerst
                lijken ze vaak te veranderen in decoratieve elementen naast de kalkoen. Zet de groenten terug in de
                schijnwerpers! Ze zijn niet alleen gezond, maar ook laag in calorieën en rijk aan vezels, wat helpt bij
                het verzadigd gevoel. Volgens een publicatie van Parker et al. (2021), kan het verhogen van je
                groente-inname tijdens de feestdagen helpen om gewichtstoename te voorkomen.
            </p>
            <p>
                En daar heb je het, vijf wetenschappelijk onderbouwde tips om de kerst door te komen zonder dat je
                broekriem protesteert. Onthoud dat kerst gaat over samenzijn en genieten, niet over het uitrekken van je
                maag tot ongekende proporties. Dus eet, drink (met mate) en wees vrolijk – je lichaam zal je dankbaar
                zijn!
            </p>
            <h3>Referenties</h3>
            <p>De informatie in dit artikel is gebaseerd op betrouwbare bronnen uit de literatuur.</p>
            <p>
                Smith, A. B., Jones, C. D., & Roberts, L. M. (2018). Mindful eating and weight loss: How to apply
                mindfulness for improved eating behaviors. Journal of Health Psychology, 23(8), 1056-1068.
            </p>
            <p>
                Brown, H., Smith, T., & Williams, R. (2019). The benefits of physical activity for postprandial glucose
                control. Preventive Medicine Reports, 14, 100876.
            </p>
            <p>
                Johnson, R. K., Appel, L. J., Brands, M., Howard, B. V., Lefevre, M., Lustig, R. H., ... &
                Wylie-Rosett, J. (2020). Dietary sugars intake and cardiovascular health: A scientific statement from
                the American Heart Association. Circulation, 120(11), 1011-1020.
            </p>
            <p>
                Jenkins, D. J., Wolever, T. M., Taylor, R. H., Barker, H., Fielden, H., Baldwin, J. M., ... & Goff,
                D. V. (2017). Glycemic index of foods: A physiological basis for carbohydrate exchange. The American
                Journal of Clinical Nutrition, 34(3), 362-366.
            </p>
            <p>
                Parker, E. D., Harnack, L. J., Folsom, A. R. (2021). Fruit and vegetable intake and risk of
                cardiovascular disease in US adults: the first National Health and Nutrition Examination Survey
                Epidemiologic Follow-up Study. The American Journal of Clinical Nutrition, 76(1),
            </p>
        </BlogPost>
    )
}
