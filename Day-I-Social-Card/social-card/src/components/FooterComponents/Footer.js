import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className='footer-content'>
            <div className='comment-icon icons'><i class='far fa-comment'></i></div> 
            <div className='retweet-icon icons'><i class='fas fa-retweet'> 4</i></div> 
            <div className='heart-icon icons'><i class='far fa-heart'> 6</i></div> 
            <div className='envelope-icon icons'><i class='far fa-envelope'></i></div> 
        </div>
    );
}

export default Footer;
