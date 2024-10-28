import { render } from '@testing-library/react';
import { WelcomeSection } from '../WelcomeSection';

describe('WelcomeSection', () => {
  it('renders without crashing', () => {
    const { container } = render(<WelcomeSection />);
    expect(container).toBeInTheDocument();
  });

  it('renders WelcomeMessage component', () => {
    const { getByText } = render(<WelcomeSection />);
    expect(getByText("Let's Build!")).toBeInTheDocument();
  });

  it('applies correct background and layout classes', () => {
    const { container } = render(<WelcomeSection />);
    const section = container.firstChild;
    expect(section).toHaveClass(
      'min-h-screen',
      'bg-gradient-to-b',
      'from-blue-100',
      'to-white',
      'flex',
      'items-center',
      'justify-center',
      'relative',
      'overflow-hidden'
    );
  });

  it('renders background pattern element', () => {
    const { container } = render(<WelcomeSection />);
    const pattern = container.querySelector('.bg-grid-pattern');
    expect(pattern).toBeInTheDocument();
    expect(pattern).toHaveClass('opacity-10');
  });
});
