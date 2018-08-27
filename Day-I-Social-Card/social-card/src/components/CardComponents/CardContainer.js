import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => (
    <a className = "card-container">
        <CardBanner />
        <CardContent />
    </a>
);

export default CardContainer;
