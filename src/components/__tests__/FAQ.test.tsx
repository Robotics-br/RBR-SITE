import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../FAQ';

describe('FAQ', () => {
  it('renders all questions', () => {
    render(<FAQ />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('toggles expansion when a question is clicked', () => {
    render(<FAQ />);
    const buttons = screen.getAllByRole('button');
    const firstQuestion = buttons[0];

    // First item starts expanded; clicking should collapse it.
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
  });
});
