import { FAQ } from '@/components/sections/FAQ';
import { PricingCards } from '@/components/sections/PricingCards';
import { Section } from '@/components/ui/Section';

export default function PricingPage() {
  return (
    <>
      <Section
        title="Straightforward pricing for product-led SaaS teams"
        subtitle="Choose a plan that matches your stage, then scale with confidence."
      />
      <PricingCards />
      <FAQ />
    </>
  );
}
