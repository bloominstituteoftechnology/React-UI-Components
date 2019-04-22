import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className = 'main-container'>
            <CardBanner/>
            <CardContent/>
        </div>
    )
}

export default CardContainer;
