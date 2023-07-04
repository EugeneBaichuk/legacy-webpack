import React from 'react';
import NavList from './NavList';
import { Navbar, NavbarBrand } from 'reactstrap';

import './Sitebar.css';

export const Sitebar = ({navHome, navLinks}) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href={navHome.href}>
      {navHome.text}
    </NavbarBrand>
    <NavList navLinks={navLinks}/>
  </Navbar>
)