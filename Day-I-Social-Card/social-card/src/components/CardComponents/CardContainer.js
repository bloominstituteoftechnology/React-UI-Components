import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    return (
        <div>
            <CardBanner />
            <CardContent pText="SOME TEXT" />
        </div>
    )
}

export default CardContainer;
