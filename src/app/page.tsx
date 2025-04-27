import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { TransparencySection } from '@/components/landing/transparency-section';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Ensure main takes full width for proper centering of children */}
      <main className="flex-1 w-full">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TransparencySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
