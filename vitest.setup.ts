import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: any) =>
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={typeof href === 'string' ? href : '#'} {...rest}>{children}</a>
}));
