import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('Cats component', () => {
  beforeEach(() => {
    render(
      <App />
    );
  });

  afterEach(cleanup);

  test('Sitebar component is rendered', () => {
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test('Cats component is rendered when the "/cats" route is active', () => {
    expect(screen.queryByText(/raining cats/i)).toBeNull();
    fireEvent.click(screen.getByText(/cat challenge/i));
    expect(screen.getByText(/raining cats/i)).toBeInTheDocument();
  });

  test('Search component is rendered when the "/search" route is active', () => {
    expect(screen.queryByText(/results/i)).toBeNull();
    fireEvent.click(screen.getByText(/search challenge/i));
    expect(screen.getByText(/results/i)).toBeInTheDocument();
  });

  test('Dogs component is rendered when the "/dogs" route is active', () => {
    expect(screen.queryByText(/dog eat dog/i)).toBeNull();
    fireEvent.click(screen.getByText(/dog challenge/i));
    expect(screen.getByText(/dog eat dog/i)).toBeInTheDocument();
  });

  test('Todo component is rendered when the "/todo" route is active', () => {
    expect(screen.queryByText(/add quest/i)).toBeNull();
    fireEvent.click(screen.getByText(/todo challenge/i));
    expect(screen.getByText(/add quest/i)).toBeInTheDocument();
  });
});