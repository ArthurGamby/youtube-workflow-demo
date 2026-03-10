import { render, screen } from '@testing-library/react';
import PricingPage from '@/app/pricing/page';

describe('Pricing page', () => {
  it('renders all plans', () => {
    render(<PricingPage />);
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('Scale')).toBeInTheDocument();
  });
});
