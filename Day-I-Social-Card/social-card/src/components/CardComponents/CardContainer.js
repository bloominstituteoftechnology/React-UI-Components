import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div class = 'Card-Container'>
        <CardBanner />
        <CardContent />
        </div>
    )
};



export default CardContainer;
