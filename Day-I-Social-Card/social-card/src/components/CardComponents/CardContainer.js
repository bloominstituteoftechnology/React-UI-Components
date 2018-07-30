import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    //nest divs in the container
    return <div className="container-wrapper"> <CardBanner />  </div>
};

export default CardContainer;