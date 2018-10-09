import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div className="CardContainer">
        <CardContent />
        <CardBanner />
        </div>
    )
}
export default CardContainer;