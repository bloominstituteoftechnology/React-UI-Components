import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div onClick={() => alert('Chat Icon')} className='images'>
                    <img src="https://ibin.co/44xlP0ABev28.png" />
                </div>
                <div onClick={() => alert('Refresh Icon')} className='images'>
                    <img src="https://ibin.co/44xlmPyeKO8e.png" />
                    <span>6</span>
                </div>
                <div onClick={() => alert('Heart Icon')} className='images'>
                    <img src="https://ibin.co/44xl8SDNdsyU.png" />
                    <span>4</span>
                </div>
                <div onClick={() => alert('Mail Icon')} className='images'>
                    <img src="https://ibin.co/44xmBhw6oGrm.png" />
                </div>
            </div>
        </div>

    );
}

export default Footer;