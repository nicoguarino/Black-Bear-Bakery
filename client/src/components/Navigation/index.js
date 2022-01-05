import React from 'react';
// import Auth from '../../utils/auth';
// import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';
import './style.css';


// function Navigate() {

//     function showNavigation() {
//         if (Auth.loggedIn()) {
//             return (
//                 <a href="/" onClick={() => Auth.logout()}>
//                     Logout
//                 </a>
//             )
//         } else {
//             return (
//                 <ul>
//                     <li>
//                         <Link to="/signup">
//                             Signup
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/login">
//                             Login
//                         </Link>
//                     </li>
//                 </ul>
//             );
//         }
//     }

//     return (
//         <header>
//             <h1>
//                 <Link to="/">
//                     <img src="https://i.imgur.com/hhienK4.png" />
//                 </Link>
//             </h1>
//             <nav>
//                 {showNavigation()}
//             </nav>
//         </header>   
//     );
// }

function Navigation() {
    return (
        // <header>
        // <Navbar bg="light" variant="light">
        //     <Container>
        //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //     <Nav className="me-auto">
        //     <Nav.Link href="#home">Home</Nav.Link>
        //     <Nav.Link href="#features">Features</Nav.Link>
        //     <Nav.Link href="#pricing">Pricing</Nav.Link>
        //     </Nav>
        //     </Container>
        // </Navbar>
        // </header>

        <header>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"><img src="https://i.imgur.com/hhienK4.png" /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/store">Store</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </header>

        
        // <header>
        //     <Container>
        //     <nav>
        //         <h1>
        //             <a href="/"><img src="https://i.imgur.com/hhienK4.png" className="header-img" /></a>
        //         </h1>
        //     <ul>
        //         <li><a href="/">Home</a></li>
        //         <li><a href="#store">Store</a></li>
        //         <li><a href="#contact">Contact</a></li>
        //         <li><a href="/login">Login</a></li>
        //         <li><a href="/">Logout</a></li>
        //         <li><a href="/signup">Signup</a></li>
        //     </ul>
        //         <FiShoppingCart />
        //     </nav>
        //     </Container>
        // </header>
        
    );
}

export default Navigation;