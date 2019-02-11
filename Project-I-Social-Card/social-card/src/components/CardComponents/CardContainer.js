import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <a 
            className="CardContainer"
            href="https://www.reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="card">
                <CardBanner />
                <CardContent />
            </div>
        </a>
    )
}

export default CardContainer;