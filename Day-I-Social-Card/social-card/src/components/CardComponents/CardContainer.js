import React from 'react';
import './Card.css';
import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div className='banner-wrapper'>
            <CardBanner />
            <CardContainer />
        </div>
    );
};

export default CardContainer;