import React from 'react';
import { NavLink } from 'react-router-dom';

import '../NavBar/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <NavLink exact to="/">
      Bio
    </NavLink>
    <NavLink to="/Skills">
      Skills
    </NavLink>
    <NavLink to="/Projects">
      Projects
    </NavLink>
  </nav>
);

export default NavBar;