import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <div className="retweet">
                <i className="fa fa-retweet" aria-hidden="true"></i>
                <p className='retweetNumber'>0</p>
            </div>
            <div className="like">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <p className='likeNumber'>0</p>
            </div>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
    );
};

export default Footer;

