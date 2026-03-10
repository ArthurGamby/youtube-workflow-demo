import Link from 'next/link';
import { Section } from '@/components/ui/Section';

export function CTASection() {
  return (
    <Section>
      <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-700/40 to-brand-500/30 p-8 text-center">
        <h2 className="text-3xl font-semibold text-white">Ready to improve conversion with confidence?</h2>
        <p className="mt-3 text-slate-200">
          Bring product, growth, and engineering into one conversion-focused operating rhythm.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          Start free trial
        </Link>
      </div>
    </Section>
  );
}
