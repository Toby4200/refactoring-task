import App from './App';
import { createRoot } from 'react-dom/client';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);

  root.render(<App />);
});

it('matches snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
