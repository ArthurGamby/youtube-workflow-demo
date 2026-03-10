import { features } from '@/data/marketing';
import { Section } from '@/components/ui/Section';

export function FeaturesGrid() {
  return (
    <Section
      title="Turn product and engineering signals into conversion wins"
      subtitle="DevPulse helps teams identify what moves activation and revenue, then act quickly."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-medium text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
