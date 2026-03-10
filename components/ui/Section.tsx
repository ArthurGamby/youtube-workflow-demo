import { ReactNode } from 'react';
import { Container } from './Container';

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        {(title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {title && <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-slate-300">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
