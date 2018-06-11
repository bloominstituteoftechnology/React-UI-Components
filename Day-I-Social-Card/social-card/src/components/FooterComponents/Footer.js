import React from 'react';
import './Footer.css';
import FooterBtn from './FooterBtn.js';


const Footer = () => {
    return (
        <div class = "footer-container">
        <FooterBtn iconClass = "far fa-comment" />
        <FooterBtn iconClass = "fas fa-share-alt" number = "6"/>
        <FooterBtn iconClass = "far fa-heart" number = "4"/>
        <FooterBtn iconClass = "far fa-envelope" />
        </div>
    );
}

export default Footer;