import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

//hold card components

const CardContainer = () => (
    <div class="card-container">
        <CardBanner />
        <CardContent />
    </div>
);

export default CardContainer;
