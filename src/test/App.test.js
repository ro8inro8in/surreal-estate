import { render, screen } from '@testing-library/react';
import App from '../components/App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
