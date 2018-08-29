import React from 'react';
import './Card.css';
import UserBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
    return (
        <div class="card-container">
            <UserBanner />
            <CardContent />
        </div>
    );
};

export default CardContainer;