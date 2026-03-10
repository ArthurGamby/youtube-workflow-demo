import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <>
      <Section
        title="About DevPulse"
        subtitle="We believe engineering teams should have clear visibility into how product decisions influence growth."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Mission</h3>
            <p className="mt-3 text-sm text-slate-300">
              Help teams connect technical delivery to business outcomes without analytics overhead.
            </p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Approach</h3>
            <p className="mt-3 text-sm text-slate-300">
              Keep insights actionable, fast, and shared across engineering, product, and growth.
            </p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Values</h3>
            <p className="mt-3 text-sm text-slate-300">
              Simplicity, rigor, and transparency in every dashboard and recommendation.
            </p>
          </article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
