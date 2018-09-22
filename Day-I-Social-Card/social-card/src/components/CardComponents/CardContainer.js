import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';
import CardBanner from './CardBanner.js';

const CardContainer = () => {
    return (
        <a href = "https://www.reactjs.org" target = "_blank" rel = "noopener noreferrer" >
            <div className="card-container">
                <CardBanner />
                <CardContent />
            </div>
        </a> 
    )
}

export default CardContainer;
