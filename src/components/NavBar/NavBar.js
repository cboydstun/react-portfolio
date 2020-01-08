import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../NavBar/NavBar.css';

const NavBar = () => (
  <Navbar bg="danger" expand="lg">
  <NavLink exact to="/">
      Bio
    </NavLink>
    <NavLink to="/Skills">
      Skills
    </NavLink>
    <NavLink to="/Projects">
      Projects
    </NavLink>
  </Navbar>
);

export default NavBar;