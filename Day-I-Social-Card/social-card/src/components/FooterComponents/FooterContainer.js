import React from "react";
import './Footer.css';

const FooterContainer = () => {
    return (
        <div className='footer-container'>
        <FooterComment />
        <FooterRePost />
        <FooterLove />
        <FooterEmail />
        </div>
    );
}

export default FooterContainer;