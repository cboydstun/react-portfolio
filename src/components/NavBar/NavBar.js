import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import logo from './logo.png';

// This contains the header bar seen at the top of the page.
function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src= { logo }
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                    Chris Boydstun: Full Stack Developer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#link">Bio</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;