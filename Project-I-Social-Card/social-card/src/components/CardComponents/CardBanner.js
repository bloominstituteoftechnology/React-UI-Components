import React from 'react';
import './Card.css';
import reactImg from './reactbackground.png'

const CardBanner = () => {
    return (
        <div className="img2">
            <img className="cardbanner" src={reactImg} alt="react banner" />
        </div>
    );
};

export default CardBanner;