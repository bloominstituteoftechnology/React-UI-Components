import React from 'react';
import './Card.css';

const CardBanner = () => {
    return (
        <a className="banner-container-wrapper" href="https://reactjs.org">
            <img
                alt="React logo"
                className="banner-img"
                scr="https://ibin.co/3wnC6SgIOJud.png"
            />
        </a>
    );
};

export default CardBanner;