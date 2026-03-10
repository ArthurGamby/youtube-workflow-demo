import { CTASection } from '@/components/sections/CTASection';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { Section } from '@/components/ui/Section';

export default function FeaturesPage() {
  return (
    <>
      <Section
        title="Features built for conversion-focused teams"
        subtitle="From release monitoring to journey diagnostics, DevPulse gives engineers a direct line to growth outcomes."
      />
      <FeaturesGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
