import React from 'react';
import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';
import './Card.css';

const CardContainer = () => {
    return (
        <div class="card-link">
            <a href="https://reactjs.org/">
            <div class="card-container">
                <CardBanner />
                <CardContent />
            </div>
            </a>
        </div>
        
    )
};

export default CardContainer;