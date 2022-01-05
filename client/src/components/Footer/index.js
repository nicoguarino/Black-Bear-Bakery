import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import './style.css';

function Footer() {
    return (
        <Container>
        <div className="contact">
            <a href="https://www.facebook.com/blackbearbakerydurango" className="contact-link" target="_blank"><BsFacebook /></a>
            <a href="https://www.instagram.com/_blackbearbakery_/" className="contact-link" target="_blank"><BsInstagram /></a>
            <a href="mailto:blackbearbakerydurango@gmail.com" className="contact-link"><FaEnvelope /></a>
        </div>
        </Container>

    );
}

export default Footer;