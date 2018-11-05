import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    const onClick = () => window.location.href='https://reactjs.org';
    return (
        <div className="cardContainer" onClick={onClick} >
            <CardBanner />
            <CardContent />
        </div>
    );
};

export default CardContainer;