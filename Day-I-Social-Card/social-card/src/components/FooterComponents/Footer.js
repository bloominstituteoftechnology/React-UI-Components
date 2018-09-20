import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
    return (
        <section class='footer-container'>
            <FontAwesomeIcon icon='comment' />
            <FontAwesomeIcon icon='sync-alt' />
            <FontAwesomeIcon icon='heart' />
            <FontAwesomeIcon icon='envelope' />
        </section>
    );
};

export default Footer;