import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sitebar } from '../Sitebar';

const mockNavHome = {
  href: '/home',
  text: 'My Site',
};

const mockNavLinks = [
  { route: '/home', text: 'Home' },
  { route: '/about', text: 'About' },
  { route: '/contact', text: 'Contact' },
];

describe('Sitebar', ()=> {
  let siteBrand = null;

  beforeEach(() => {
    render( 
      <Router>
        <Sitebar navHome={mockNavHome} navLinks={mockNavLinks} />
      </Router>);
    siteBrand = screen.getByText(mockNavHome.text);
  });

  afterEach(cleanup);

  test('renders site brand', () => {
    expect(siteBrand).toBeInTheDocument();
  });

  test('site brand has href attribute', () => {
    expect(siteBrand).toHaveAttribute('href', mockNavHome.href);
  });
})