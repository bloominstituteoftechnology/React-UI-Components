import React from 'react';
import './Card.css';
import './CardBanner';
import CardContent from './CardContent'
import CardBanner from './CardBanner';

const CardContainer = () => {
    return <div className="container-wrapper">
        <CardBanner />
        <CardContent />
    </div>;
};

export default CardContainer;