import React from 'react';
import './Footer.css';
import Message from './message';
import Share from './share';
import Favorite from './favorite';
import Email from './email';

const Footer = () => {
    return (
        <div className="footer-bar">
            <Message />
            <Share />
            <Favorite />
            <Email />
        </div>
    )
}

export default Footer