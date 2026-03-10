import { faqItems } from '@/data/marketing';
import { Section } from '@/components/ui/Section';

export function FAQ() {
  return (
    <Section title="FAQ">
      <div className="space-y-3">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
            <summary className="cursor-pointer font-medium text-white">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
