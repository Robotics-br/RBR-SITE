import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  it('renders an image with appropriate alt text', () => {
    render(<Logo />);
    const img = screen.getByRole('img', { name: /roboticsbr/i });
    expect(img).toBeInTheDocument();
  });

  it('respects the height prop', () => {
    render(<Logo height={64} />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({ height: '64px' });
  });
});
