import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-buttons">
            <i className="far fa-comment" />
            <i className="fas fa-retweet" /><p class="retweet show">1</p>
            <i className="far fa-heart" /><p class="heart show">1</p>
            <i className="far fa-envelope" />
        </div>
    );
}

export default Footer;