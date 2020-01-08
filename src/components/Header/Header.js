import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';

// This contains the header bar seen at the top of the page.
function Header() {

    var linkStyle = {
        display:"flex"
    };

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Chris Boydstun: Full Stack Developer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Bio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" style={linkStyle}>
                        <a class="nav-link" href="/Skills">Skills</a>
                        <a class="nav-link" href="/Projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;