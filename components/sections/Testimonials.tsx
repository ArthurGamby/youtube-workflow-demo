import { testimonials } from '@/data/marketing';
import { Section } from '@/components/ui/Section';

export function Testimonials() {
  return (
    <Section title="What customers say">
      <div className="grid gap-4 lg:grid-cols-2">
        {testimonials.map((item) => (
          <figure key={item.author} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <blockquote className="text-slate-100">“{item.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-300">
              <span className="font-medium text-white">{item.author}</span> — {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
