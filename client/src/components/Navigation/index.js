import React from 'react';
import Auth from '../../utils/auth';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import './style.css';


function Navigation() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Nav bg="light" variant="light" collapseOnSelect expand="md">
                <Container>
                    <Nav.Item>
                        <Nav.Link href="/" onClick={() => Auth.logout()} className="justify-content-end">
                            Logout
                        </Nav.Link>
                    </Nav.Item>
                </Container>
                </Nav>
            )
        } else {
            return (

                <Nav bg="light" variant="light" collapseOnSelect expand="md">
                    <Container>
                        <Nav.Item>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav.Item>
                    </Container>
                </Nav> 
            );
        }
    }

    return (
        <header>
        <Navbar bg="light" variant="light" collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand href="/"><img src="https://i.imgur.com/hhienK4.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/store">Store</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        {showNavigation()}
                        <Nav.Link><FiShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>   
    );
}

export default Navigation;