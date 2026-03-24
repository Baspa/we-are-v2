import { Head } from '@inertiajs/react'
import { Phone, Mail } from 'lucide-react'
import contactCoffee from '@/assets/contact-coffee.png'
import InlineContactForm from '@/components/InlineContactForm'
import MainLayout from '@/layouts/MainLayout'

export default function Contact() {
    return (
        <MainLayout showStickyCTA={false}>
            <Head title="Contact | Personal Training Uden & Schijndel | WE ARE">
                <meta name="description" content="Neem contact op met WE ARE Personal Training in Uden en Schijndel. Plan een gratis kennismaking onder het genot van een bak koffie. We zijn benieuwd naar jouw verhaal!" />
                <meta name="keywords" content="Contact Personal Training Uden, Contact Personal Training Schijndel, Kennismaking Personal Trainer, Afvallen Uden, Afvallen Schijndel" />
                <meta property="og:title" content="Contact | WE ARE Personal Training Uden & Schijndel" />
                <meta property="og:description" content="Plan een gratis kennismaking bij WE ARE Personal Training. We ontvangen je graag met een bak koffie!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club/contact" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club/contact" />
            </Head>

            {/* Hero */}
            <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-24 md:pt-40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="container mx-auto relative z-10 px-4">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        {/* Text */}
                        <div>
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Contact</p>
                            <h1 className="section-title mb-6">
                                Laten we kennismaken onder het genot van een <span className="text-primary">bak koffie</span>
                            </h1>
                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                We snappen dat de stap alwéér een nieuwe poging spannend kan zijn. Daarom nodigen we je graag eerst uit voor een vrijblijvend gesprek. Geen verplichtingen, geen druk – gewoon een goed gesprek onder het genot van een kopje koffie. We zijn oprecht benieuwd naar jouw verhaal en kijken of we je kunnen helpen.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="mt-0.5 h-5 w-5 text-primary" />
                                    <a href="tel:+31636123542" className="text-foreground transition-colors hover:text-primary">+31 6 36 12 35 42</a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="mt-0.5 h-5 w-5 text-primary" />
                                    <a href="mailto:info@we-are.club" className="text-foreground transition-colors hover:text-primary">info@we-are.club</a>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                            <img src={contactCoffee} alt="WE ARE Personal Training - Kennismaking met koffie" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-10 text-center">
                        <h2 className="section-title mb-6">Plan je <span className="text-primary">kennismaking</span></h2>
                        <p className="text-lg text-muted-foreground">
                            Vul onderstaand formulier in en we nemen zo snel mogelijk contact met je op om een afspraak te maken.
                        </p>
                    </div>
                    <InlineContactForm />
                </div>
            </section>
        </MainLayout>
    )
}
