import React from 'react';
import './Card.css';
import banner from './react.png';

function CardBanner (){
    return (
        <img className="bannerImg" src={banner} alt='react logo' width="500px" height="250px" />
    )
};

export default CardBanner;