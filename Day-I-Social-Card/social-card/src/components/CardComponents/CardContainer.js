import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContentTitle from './CardContentTitle';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        <div className="cardContainer">
            <div><CardBanner /></div>
            <CardContentTitle />
            <CardContent />
            
        </div>
    );
};

export default CardContainer;