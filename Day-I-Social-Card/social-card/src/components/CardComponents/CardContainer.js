import React from 'react';
import './Card.sass';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    return (
        <div className="card-container">
            <CardBanner />
            <CardContent />
        </div>
    );
};

export default CardContainer;
