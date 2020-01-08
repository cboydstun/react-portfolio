import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';

// This contains the header bar seen at the top of the page.
function Header() {
    return (
        <Navbar bg="danger" expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src= { logo }
                    width="30"
                    height="30"
                    // className="d-inline-block align-top"
                />{' '}
                    Chris Boydstun: Full Stack Developer
            </Navbar.Brand>

            <NavLink exact to="/">
                <Button>Bio</Button>
            </NavLink>

            <NavLink to="/Skills">
                <Button>Skills</Button>
            </NavLink>

            <NavLink to="/Projects">
                <Button>Projects</Button>
            </NavLink>
        </Navbar>
    );
}

export default Header;