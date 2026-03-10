import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { Hero } from '@/components/sections/Hero';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { PricingCards } from '@/components/sections/PricingCards';
import { Testimonials } from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeaturesGrid />
      <Testimonials />
      <PricingCards />
      <FAQ />
      <CTASection />
    </>
  );
}
