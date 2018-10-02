import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <div className = 'footer'>
           <i className="far fa-comment"></i>
            <i className="fa fa-retweet">22</i>
            <i className="far fa-heart">41</i>
            <i className="far fa-envelope"></i>
        </div>
    );
}

export default Footer;