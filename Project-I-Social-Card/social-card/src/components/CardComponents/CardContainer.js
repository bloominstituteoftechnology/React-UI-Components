import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div className="card-container">
            <a href="https://www.reactjs.org">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    )
}

export default CardContainer;