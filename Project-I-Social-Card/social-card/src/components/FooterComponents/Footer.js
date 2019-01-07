import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div><i class="far fa-comment"></i><p></p></div>
            <div><i class="fas fa-retweet"></i><p>6</p></div>
            <div><i class="far fa-heart"></i><p>4</p></div>
            <div><i class="far fa-envelope"></i><p></p></div>
        </div>
    )
}

export default Footer;