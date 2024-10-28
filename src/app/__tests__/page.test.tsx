import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders WelcomeSection component', () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toHaveClass('min-h-screen');
  });
});
