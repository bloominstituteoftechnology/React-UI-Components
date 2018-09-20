import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContainer = (props) => {
    return (
        <div className="CardContainer">
            <CardBanner />
        </div>
    );
};

export default CardContainer;