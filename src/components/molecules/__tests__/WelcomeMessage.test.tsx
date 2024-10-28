import { render } from '@testing-library/react';
import { WelcomeMessage } from '../WelcomeMessage';

describe('WelcomeMessage', () => {
  it('renders without crashing', () => {
    const { container } = render(<WelcomeMessage />);
    expect(container).toBeInTheDocument();
  });

  it('renders ShiningSun component', () => {
    const { container } = render(<WelcomeMessage />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders text content correctly', () => {
    const { getByText } = render(<WelcomeMessage />);
    expect(getByText("Let's Build!")).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<WelcomeMessage />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('flex', 'flex-col', 'items-center', 'gap-8');
  });
});
