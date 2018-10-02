import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div class="card-banner-div">
            <CardBanner />
        <div class="card-content-div">
            <CardContent />
        </div>
        </div>
    )
}

export default CardContainer;