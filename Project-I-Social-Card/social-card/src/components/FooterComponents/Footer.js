import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='social-action'>
                <i class="far fa-comment"></i>
                <span className='social-number'></span>
            </div>
            <div className='social-action'>
                <i class="fas fa-retweet"></i>
                <span className='social-number'>6</span>
            </div>
            <div className='social-action'>
                <i class="far fa-heart"></i>
                <span className='social-number'>4</span>
            </div>
            <div className='social-action'>
                <i class="far fa-envelope"></i>
            </div>
        </div>
    );
}

export default Footer;