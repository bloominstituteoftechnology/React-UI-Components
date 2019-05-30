import React from 'react';
import './Card.css';

const CardContainer = () => {
    return (
        <div className="cardContainer">
        <CardBanner />
        <CardContent />
        </div>
    )
}

export default CardContainer;