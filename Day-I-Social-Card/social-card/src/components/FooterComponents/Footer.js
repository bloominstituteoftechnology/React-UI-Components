import React from 'react';
import FooterComment from '../FooterComponents/FooterComment';
import FooterRetweet from '../FooterComponents/FooterRetweet';
import FooterLike from '../FooterComponents/FooterLike';
import FooterShare from '../FooterComponents/FooterShare';
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