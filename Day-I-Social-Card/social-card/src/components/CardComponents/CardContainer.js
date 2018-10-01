import React from 'react';
import './Card.css';
import './CardBanner';
import CardBanner from './CardBanner';
import CardContent from'./CardContent';

const CardContainer = () => {
    return (
        <div className="cardLink">
        <a href="https://www.reactjs.org">
        <div className="cardContainer">
            <CardBanner />
            <CardContent />
        </div>
        </a>
        </div>
    )
}

export default CardContainer;