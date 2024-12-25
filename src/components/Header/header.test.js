import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  it('renders title correctly when provided', () => {
    render(<Header title="Posts App" />);
    expect(screen.getByText('Posts App')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Header title="Posts App" />);
    expect(container).toMatchSnapshot();
  });
});
