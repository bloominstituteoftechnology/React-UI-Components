import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => (

    <div className="cardContainer">
        <a href="https://www.reactjs.org" className="reactLink">
            <CardBanner />
            <CardContent />
        </a>
    </div>
)


export default CardContainer;
