import React from 'react';

import { Navbar } from 'react-bootstrap';

function Footer({ children }) {
    return (
        <Navbar bg="danger" expand="lg" fixed="bottom" width="50%"></Navbar>
    )
}

export default Footer