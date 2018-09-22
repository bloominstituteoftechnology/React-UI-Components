import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <a href="#" target="_blank"><i className="far fa-comment fa-flip-horizontal fa-2x"></i></a>
            <a href="#" target="_blank"><i className="fas fa-sync fa-2x">{` ${6}`}</i></a>
            <a href="#" target="_blank"><i className="far fa-heart fa-2x">{` ${4}`}</i></a>
            <a href="#" target="_blank"><i className="far fa-envelope fa-2x"></i></a>
        </div>
    )
}

export default Footer;