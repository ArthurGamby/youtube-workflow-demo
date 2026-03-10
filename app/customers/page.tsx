import { LogoCloud } from '@/components/sections/LogoCloud';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';

export default function CustomersPage() {
  return (
    <>
      <Section
        title="Customer stories"
        subtitle="Engineering teams use DevPulse to move faster while improving conversion quality."
      />
      <LogoCloud />
      <Testimonials />
      <CTASection />
    </>
  );
}
