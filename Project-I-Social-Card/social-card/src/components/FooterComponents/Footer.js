import React from 'react';
import './Footer.css';
import * as Icon from 'react-feather';

function Footer() {
    return (
        <div className="footer">
            <Icon.MessageCircle className="icon" />
            <Icon.RefreshCw className="icon" />
            <p className="ftText">6</p>
            <Icon.Heart className="icon" />
            <p className="ftText">4</p>
            <Icon.Mail className="icon" />
        </div>
    )
}

export default Footer