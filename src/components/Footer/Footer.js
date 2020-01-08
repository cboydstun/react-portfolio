import React from 'react';

import { Navbar } from 'react-bootstrap';

function Footer({ children }) {
    return (
        // <Navbar bg="danger" expand="lg" fixed="bottom" width="50%"></Navbar>
        <nav class="navbar navbar-expand-lg bg-light" fixed="bottom">
            <p class="col text-center">Copyright</p>
        </nav>

    )
}

export default Footer