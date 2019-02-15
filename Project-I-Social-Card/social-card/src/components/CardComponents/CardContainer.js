import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <a className="contLink" href="https://www.reactjs.org" target="_blank" >
        <div className="cardContainer">
            <CardBanner />
            <CardContent />
        </div>
        </a>
    )
}

export default CardContainer
