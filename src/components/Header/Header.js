import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';

// This contains the header bar seen at the top of the page.
function Header() {

    var buttonStyle = {
        margin:"0.25rem"
    };

    return (
        <Navbar bg="danger" fixed="top">
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
            <div >
                <NavLink exact to="/" style = { buttonStyle }>
                    <Button>Bio</Button>
                </NavLink>

                <NavLink to="/Skills" style = { buttonStyle }>
                    <Button>Skills</Button>
                </NavLink>

                <NavLink to="/Projects" style = { buttonStyle }>
                    <Button>Projects</Button>
                </NavLink>
            </div>
        </Navbar>
    );
}

export default Header;