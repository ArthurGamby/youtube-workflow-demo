import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

describe('Contact page', () => {
  it('renders required form fields', () => {
    render(<ContactPage />);
    expect(screen.getByRole('textbox', { name: /name/i })).toBeRequired();
    expect(screen.getByRole('textbox', { name: /work email/i })).toBeRequired();
    expect(screen.getByRole('textbox', { name: /company/i })).toBeRequired();
    expect(screen.getByRole('textbox', { name: /message/i })).toBeRequired();
  });
});
