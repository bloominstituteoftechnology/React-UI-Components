import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

//hold card components

const CardContainer = () => (
    <div className="card-container">
        <CardBanner />
        <CardContent />
    </div>
);

export default CardContainer;
