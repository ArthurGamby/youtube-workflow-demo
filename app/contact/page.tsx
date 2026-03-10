import { Section } from '@/components/ui/Section';

export default function ContactPage() {
  return (
    <Section
      title="Talk with our team"
      subtitle="Tell us about your funnel and release workflow. We'll propose a tailored DevPulse setup."
    >
      <form className="grid max-w-2xl gap-4" aria-label="Contact form">
        <label className="grid gap-2 text-sm">
          Name
          <input
            name="name"
            required
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Work email
          <input
            name="email"
            type="email"
            required
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Company
          <input
            name="company"
            required
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="mt-2 w-fit rounded-md bg-brand-500 px-5 py-3 text-sm font-medium text-white hover:bg-brand-600"
        >
          Send request
        </button>
      </form>
    </Section>
  );
}
