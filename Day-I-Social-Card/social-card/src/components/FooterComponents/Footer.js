import React from 'react';
import FooterComment from './FooterComment';
import FooterRetweet from './FooterRetweet';
import FooterLike from './FooterLike';
import FooterShare from './FooterShare';
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer-container">
            <FooterComment />
            <FooterRetweet />
            <FooterLike />
            <FooterShare />
        </div>
    )
};

export default Footer;