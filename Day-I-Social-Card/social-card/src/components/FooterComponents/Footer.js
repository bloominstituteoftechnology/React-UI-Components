import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='images'>
                    <img onClick={() => alert('Chat Icon')} src="https://ibin.co/44xlP0ABev28.png" />
                </div>
                <div className='images'>
                    <img onClick={() => alert('Refresh Icon')} src="https://ibin.co/44xlmPyeKO8e.png" />
                    <span>6</span>
                </div>
                <div className='images'>
                    <img onClick={() => alert('Heart Icon')} src="https://ibin.co/44xl8SDNdsyU.png" />
                    <span>4</span>
                </div>
                <div className='images'>
                    <img onClick={() => alert('Mail Icon')} src="https://ibin.co/44xmBhw6oGrm.png" />
                </div>
            </div>
        </div>

    );
}

export default Footer;