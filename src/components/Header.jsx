import React from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="black" sticky="top" variant="dark" expand="md" className="pt-0 pb-0">
                <Navbar.Brand to="/" className="p-0"><img src="img/logo.png" alt="" width="100" height="100"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/explore">Explore</Nav.Link>
                        <Nav.Link to="/hotels">Hotels</Nav.Link>
                        <Nav.Link to="/flights">Flights</Nav.Link>
                        <Nav.Link to="/train">Train</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link to="/my-trips">My Trips</Nav.Link>
                        <Nav.Link to="/my-bucket-list">My Bucket List</Nav.Link>
                        <Nav.Link to="/search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

