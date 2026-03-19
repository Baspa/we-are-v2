import { type PropsWithChildren } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import { Toaster } from '@/components/ui/sonner'

interface MainLayoutProps {
    showStickyCTA?: boolean
    showFooter?: boolean
}

export default function MainLayout({ children, showStickyCTA = true, showFooter = true }: PropsWithChildren<MainLayoutProps>) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            {showFooter && <Footer />}
            {showStickyCTA && <StickyCTA />}
            <Toaster />
        </div>
    )
}
