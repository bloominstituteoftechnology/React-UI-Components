import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
    <div class="Footer">
        <img src="https://ibin.co/44xlP0ABev28.png" />
        <img src="https://ibin.co/44xlmPyeKO8e.png" class="recycle-btn" onClick={() => {
                let button = document.querySelector('.recycle');
                let Recycle = 0;
                Recycle++;
                button.innerHTML = Recycle;
            }}/>
        <p class="recycle">6</p>
        <img src="https://ibin.co/44xl8SDNdsyU.png" class="heart-btn" />
        <p class="heart">4</p>
        <img src="https://ibin.co/44xmBhw6oGrm.png" />
    </div>
    );
};

export default Footer;
