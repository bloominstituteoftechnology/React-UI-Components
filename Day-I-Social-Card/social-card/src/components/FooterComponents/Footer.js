import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footerContainer">
            <div className='messageIcon'></div>
            <div className='retweetIcon'></div>
            <div className='likeIcon'></div>
            <div className='directmessageIcon'></div>
        </div>
    );
};

export default Footer