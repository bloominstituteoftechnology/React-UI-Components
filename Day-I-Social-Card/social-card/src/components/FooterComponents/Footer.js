import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <i class="fa fa-comment-o" aria-hidden="true"></i>
            <div className="retweet">
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <p>6</p>
            </div>
            <div className="like">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <p>4</p>
            </div>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
    );
};

export default Footer;