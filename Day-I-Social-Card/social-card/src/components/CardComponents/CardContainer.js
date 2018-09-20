import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
    return (
        <div class="card-link">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <div class="card-container">
                <CardBanner />
                <CardContent />
            </div>
            </a>
        </div>
        
    )
};

export default CardContainer;