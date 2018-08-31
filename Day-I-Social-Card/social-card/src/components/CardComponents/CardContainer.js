import React from 'react';
import './Card.css';

import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';




const CardContainer = () => {
    return (
        <div>
            <CardBanner />
            <CardContent />
            <a href="https://www.reactjs.org">reactjs.org</a>
        </div>
    )
};

export default CardContainer;
