import BlogPost from '@/components/BlogPost'
import type { Blog } from '@/types/blog'

export default function NutRustdag({ blog }: { blog: Blog }) {
    return (
        <BlogPost blog={blog}>
            <p>
                Rustdagen; voor de &eacute;&eacute;n een geschenk uit de hemel, voor de ander iets wat ze liever niet
                doen. Je hoort weleens mensen zeggen dat rustdagen niet nodig zijn. Hoe vaker je traint, hoe beter toch?
            </p>
            <p>
                Dit is niet helemaal waar. Hoe vaker je traint, hoe meer calorie&euml;n je verbrandt tijdens het
                trainen. Dat klopt. In de tussentijd maak je echter meer kapot dan je op het begin zult merken omdat je
                lichaam onvoldoende tijd krijgt om te herstellen.
            </p>
            <h2>Het nut van een rustdag</h2>
            <p>
                Tijdens een intensieve workout komen er minuscule scheurtjes in de spieren. Je lichaam word aan het werk
                gezet om deze minuscule scheurtjes te herstellen. Dit zal zodanig gebeuren dat je sterker zult worden en
                meer/makkelijker gewicht aankunt.
            </p>
            <p>
                Als je te weinig rust neemt krijgt je lichaam niet voldoende tijd om de minuscule scheurtjes in je
                spieren te herstellen. Hierdoor word je dus niet sterker of in sommige gevallen juist minder sterk dat
                dan je was. In onderstaand plaatje zie je een fenomeen genaamd supercompensatie.
            </p>
            <p>
                Je ziet dat in het eerste gedeelte je spieren beschadigd raken en daarmee zwakker worden. Daarna komt het
                herstel, waarin de spieren weer langzaam sterker zullen worden. Ze worden zelfs sterker dan ze van
                tevoren waren, zoals je ziet aan de rode lijn die boven de zwarte lijn uitkomt. Het gebied wat boven de
                zwarte lijn zit noemen we dus supercompensatie. In deze fase ben je sterker dan dat je voor de training
                was.
            </p>
            <p>
                Aan dit plaatje kun je ook afleiden wat er gebeurd als je onvoldoende rust neemt. Als je te weinig tijd
                hebt voor herstel loopt de rode lijn nog onder de zwarte lijn. Dit betekent dus dat je spieren minder
                sterk zijn op dat moment dan bij de training die je vorige keer deed.
            </p>
        </BlogPost>
    )
}
