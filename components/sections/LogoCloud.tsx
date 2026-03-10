import { logoCloud } from '@/data/marketing';
import { Section } from '@/components/ui/Section';

export function LogoCloud() {
  return (
    <Section subtitle="Trusted by product and engineering teams building ambitious SaaS products.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {logoCloud.map((name) => (
          <div
            key={name}
            className="rounded-md border border-slate-800 bg-slate-900/60 px-4 py-3 text-center text-sm text-slate-300"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
}
