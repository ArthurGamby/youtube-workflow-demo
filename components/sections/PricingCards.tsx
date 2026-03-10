import Link from 'next/link';
import { plans } from '@/data/marketing';
import { Section } from '@/components/ui/Section';

export function PricingCards() {
  return (
    <Section title="Pricing built for teams at every stage">
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-3xl font-bold text-brand-50">{plan.price}</p>
            <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {plan.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
            >
              Choose {plan.name}
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
