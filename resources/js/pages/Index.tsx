import { Head } from '@inertiajs/react'
import MainLayout from '@/layouts/MainLayout'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import ResultsSection from '@/components/ResultsSection'
import TimelineSection from '@/components/TimelineSection'
import TransformationSection from '@/components/TransformationSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AtmosphereSection from '@/components/AtmosphereSection'
import LocationsSection from '@/components/LocationsSection'
import ContactSection from '@/components/ContactSection'

export default function Index() {
    return (
        <MainLayout>
            <Head title="Personal Training Uden & Schijndel | De Transformatie Formule">
                <meta
                    name="description"
                    content="Zoek je Personal Training in Uden of Schijndel? WE ARE helpt je afvallen en transformeren met De Transformatie Formule. 1000+ succesvolle transformaties, 100% resultaat garantie. Plan nu je gratis kennismaking!"
                />
                <meta
                    name="keywords"
                    content="Personal Training Uden, Personal Training Schijndel, Personal Trainer Uden, Personal Trainer Schijndel, Afvallen Uden, Afvallen Schijndel, Fitness, Transformatie"
                />
                <meta property="og:title" content="Personal Training Uden & Schijndel | WE ARE" />
                <meta
                    property="og:description"
                    content="Zoek je Personal Training in Uden of Schijndel? Transformeer je lichaam en geest met De Transformatie Formule. 1000+ succesvolle transformaties. 100% resultaat garantie."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://we-are.club" />
                <meta property="og:locale" content="nl_NL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://we-are.club" />
            </Head>

            <HeroSection />
            <ResultsSection />
            <BenefitsSection />
            <TimelineSection />
            <TransformationSection />
            <TestimonialsSection />
            <AtmosphereSection />
            <LocationsSection />
            <ContactSection />
        </MainLayout>
    )
}
