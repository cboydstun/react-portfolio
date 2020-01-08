import React from 'react';
import { Navbar } from 'react-bootstrap';

import logo from './logo.png';

// This contains the header bar seen at the top of the page.
function Header() {
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
        </Navbar>
    );
}

export default Header;