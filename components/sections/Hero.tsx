import Link from 'next/link';
import { site } from '@/data/site';
import { Section } from '@/components/ui/Section';

export function Hero() {
  return (
    <Section>
      <div className="max-w-4xl">
        <p className="mb-4 inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-50">
          New: Release-aware conversion monitoring
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Engineering analytics that improve your landing page conversion.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600"
          >
            {site.ctaPrimary}
          </Link>
          <Link
            href="/features"
            className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 hover:border-slate-500"
          >
            Explore features
          </Link>
        </div>
      </div>
    </Section>
  );
}
