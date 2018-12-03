import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org" className="link">
            <div className="cardContainer">
                <CardBanner />
                <CardContent />
            </div>
        </a>  
    )
}

export default CardContainer;