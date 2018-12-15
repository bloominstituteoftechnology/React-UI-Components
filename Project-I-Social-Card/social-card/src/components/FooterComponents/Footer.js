import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <i className="material-icons" onClick={console.log("It Works!")}>chat_bubble_outline</i>
            <i className="material-icons">autorenew</i>
            <i className="material-icons">favorite_border</i>
            <i className="material-icons">mail_outline</i>
        </div>
    )
    
}

export default Footer;