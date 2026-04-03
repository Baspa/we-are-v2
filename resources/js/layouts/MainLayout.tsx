import type {PropsWithChildren} from 'react';
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import StickyCTA from '@/components/StickyCTA'
import { Toaster } from '@/components/ui/sonner'

interface MainLayoutProps {
    showStickyCTA?: boolean
    showFooter?: boolean
    showNavigation?: boolean
}

export default function MainLayout({ children, showStickyCTA = true, showFooter = true, showNavigation = true }: PropsWithChildren<MainLayoutProps>) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {showNavigation && <Navigation />}
            <main>{children}</main>
            {showFooter && <Footer />}
            {showStickyCTA && <StickyCTA />}
            <Toaster />
        </div>
    )
}
