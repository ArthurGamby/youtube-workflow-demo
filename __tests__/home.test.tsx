import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders the main CTA', () => {
    render(<HomePage />);
    expect(screen.getAllByRole('link', { name: /start free trial/i })[0]).toBeInTheDocument();
  });
});
