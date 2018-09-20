import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
             <i className = "font-awesome far fa-comment"/>
            <p><i className = "font-awesome fas fa-sync-alt" />4</p>
            <p><i className = "font-awesome far fa-heart" />6</p>
            <i className = "font-awesome far fa-envelope" />
        </div>
    );
};

export default Footer;