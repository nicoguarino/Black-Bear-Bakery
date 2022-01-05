import React from 'react';
// import Auth from '../../utils/auth';
// import { Link } from "react-router-dom";
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';


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
                <h1>
                    <a href="/"><img src="https://i.imgur.com/hhienK4.png" /></a>
                </h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#store">Store</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
                <FiShoppingCart />

        </header>
    );
}

export default Navigation;