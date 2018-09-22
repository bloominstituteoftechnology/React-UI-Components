import React from 'react';
import './Card.css';

const CardBanner = () => {
    return (
        <a className="banner-container-wrapper"
        href="https://reactjs.org">
            <img 
            className="banner-img"
            src="https://ibin.co/3wnC6SgIOJud.png" 
            alt="react logo"
            />
        </a>
    );
};

export default CardBanner;