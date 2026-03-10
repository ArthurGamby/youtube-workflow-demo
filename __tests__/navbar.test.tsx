import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/layout/Navbar';

describe('Navbar', () => {
  it('renders key navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });
});
