import React from 'react';
import './Card.css';
import reactBanner from '../../img/react-logo-og.png';

const CardBanner = () => {
    return (
        <div class='bannerWrapper'>
            <img class='banner' src={reactBanner} alt='react logo' />
        </div>
    )
};

export default CardBanner;
