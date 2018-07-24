import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
    <div class="Footer">
        <img src="https://ibin.co/44xlP0ABev28.png" />
        <img src="https://ibin.co/44xlmPyeKO8e.png" class="recycle-btn" onClick={() => {
                let button = document.querySelector('.recycle-btn');
                let recycle = document.querySelector('.recycle');
                recycle.innerHTML++;                
            }}/>
        <p class="recycle">0</p>
        <img src="https://ibin.co/44xl8SDNdsyU.png" class="heart-btn" onClick={() => {
                let heartbutton = document.querySelector('.heart-btn');
                let heart = document.querySelector('.heart');
                heart.innerHTML++;                
            }}/>
        <p class="heart">0</p>
        <img src="https://ibin.co/44xmBhw6oGrm.png" />
    </div>
    );
};

export default Footer;
