import React from 'react';
// import Container from 'react-bootstrop/Container';
// import { Container } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        
        <div class="contact">
            <a href="https://www.facebook.com/blackbearbakerydurango" target="_blank"><BsFacebook /></a>
            <a href="https://www.instagram.com/_blackbearbakery_/" target="_blank"><BsInstagram /></a>
            <a href="mailto:blackbearbakerydurango@gmail.com"><FaEnvelope /></a>
        </div>

    );
}

export default Footer;