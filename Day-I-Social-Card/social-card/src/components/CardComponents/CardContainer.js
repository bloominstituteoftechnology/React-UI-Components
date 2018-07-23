import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent';

const CardContainer = ()=> {
    return (
        <div id="card-container"><CardBanner /><CardContent /></div>
    );
};

export default CardContainer;