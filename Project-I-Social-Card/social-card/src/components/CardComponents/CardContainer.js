import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

function CardContainer(){
    return(
        <div className="card-container">
            <a href="https://www.reactjs.org">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    )
};

export default CardContainer;
