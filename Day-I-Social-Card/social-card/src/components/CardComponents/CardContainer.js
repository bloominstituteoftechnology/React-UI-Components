import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(){
    return (
        <a href = "https://www.reactjs.org" className = 'click-to-reactjs'>
            <div className = 'card-container'>
                <CardBanner />
                <CardContent />
            </div>
        </a>
    );
};

export default CardContainer;