import React from 'react';
import './Footer.css';
import reload from './img/reload.png';
import speech from './img/speech-bubble.png';
import heart from './img/like.png';
import mail from './img/mail.png';

const Footer = props => {
    return (
        <div className="footer">
            <img src={speech} className="speech-bubble" />
            <img src={reload} className="arrow-circle" /> <span>{props.retweet}</span>
            <img src={heart} className="heart" /> <span>{props.like}</span>
            <img src={mail} className="mail" />
        </div>
    );
};

export default Footer;