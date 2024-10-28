import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '../Text';

describe('Text', () => {
  it('renders children correctly', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<Text>Test</Text>);
    const textElement = container.firstChild;
    expect(textElement).toHaveClass('text-6xl', 'font-bold');
  });

  it('merges custom classes with default classes', () => {
    const { container } = render(<Text className="text-red-500">Test</Text>);
    const textElement = container.firstChild;
    expect(textElement).toHaveClass('text-6xl', 'font-bold', 'text-red-500');
  });
});
