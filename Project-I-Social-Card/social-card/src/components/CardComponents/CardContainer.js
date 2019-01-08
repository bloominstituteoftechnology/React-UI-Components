import React from 'react';
import CardBanner from './CardBanner';
import './Card.css';
import CardContent from './CardContent';

const CardContainer = () =>{
    return(
        <div ClassName = 'cardContainer'>
        <CardBanner />
        <CardContent />
        </div>
    );
};

export default CardContainer;

