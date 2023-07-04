import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavList = ({ navLinks }) => {
  return (
    <Nav className="ml-auto">
      {navLinks.map((link, i) => (
        <NavItem key={i}>
          <Link to={link.route} className="site-link">{link.text}</Link>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavList
