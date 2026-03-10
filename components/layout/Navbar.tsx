import Link from 'next/link';
import { navLinks, site } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 backdrop-blur" aria-label="Primary">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-white">
          {site.name}
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-slate-300 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          Book a demo
        </Link>
      </Container>
    </nav>
  );
}
