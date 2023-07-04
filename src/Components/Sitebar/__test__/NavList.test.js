import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavList from '../NavList';

const mockNavLinks = [
  { route: '/home', text: 'Home' },
  { route: '/about', text: 'About' },
  { route: '/contact', text: 'Contact' },
];

describe('Navbar', ()=> {
  
  beforeEach(() => {
    render( 
      <Router>
        <NavList navLinks={mockNavLinks} />
      </Router>)
  });

  afterEach(cleanup);

  test('renders all navigation links', ()=> {
    const navItems = screen.getAllByRole('listitem');
    expect(navItems).toHaveLength(mockNavLinks.length);
  });

  test('links have href attribute', ()=> {
    mockNavLinks.forEach((link) => {
      const navLink = screen.getByText(link.text);
      expect(navLink).toHaveAttribute('href', link.route);
    });
  });
});