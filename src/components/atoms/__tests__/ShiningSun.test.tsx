import React from 'react';
import { render } from '@testing-library/react';
import { ShiningSun } from '../ShiningSun';

describe('ShiningSun', () => {
  it('renders without crashing', () => {
    const { container } = render(<ShiningSun />);
    expect(container).toBeInTheDocument();
  });

  it('renders SVG with correct attributes', () => {
    const { container } = render(<ShiningSun />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 200 200');
    expect(svg).toHaveClass('w-32', 'h-32', 'md:w-48', 'md:h-48');
  });

  it('renders correct number of sun rays', () => {
    const { container } = render(<ShiningSun />);
    const rays = container.querySelectorAll('line');
    expect(rays).toHaveLength(12);
  });
});
