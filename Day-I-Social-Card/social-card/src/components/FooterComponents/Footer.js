import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class='footer'>
            <i class="far fa-comment fa-2x"></i> 
            <i class="fas fa-sync-alt fa-2x"></i>
            <p class="counter">0</p>
            <i class="far fa-heart fa-2x"></i>
            <p class="counter">0</p>
            <i class="far fa-envelope fa-2x"></i>
        </div>
    )
}

export default Footer;