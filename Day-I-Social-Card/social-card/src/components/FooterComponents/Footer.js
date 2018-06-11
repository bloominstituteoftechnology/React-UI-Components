import React from 'react';
import './Footer.css';
import Discussion from './Discussion.js';
import RePosts from './Reposts.js';
import Likes from './Likes.js';
import DM from './DM.js';

const Footer = () => {
    return (
        <div className="footer-container gray-note">
            <Discussion />
            <RePosts />
            <Likes />
            <DM />
        </div>

    )
}

export default Footer;