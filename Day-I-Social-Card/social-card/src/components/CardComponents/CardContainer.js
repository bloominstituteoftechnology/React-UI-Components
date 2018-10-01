import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
    return (
        <a className = "card-anchor" href = "https://www.reactjs.org" target = "_blank">
            <div className = "card-container">
                <CardBanner />
                <CardContent />
            </div>        
        </a>

    );
}

export default CardContainer;