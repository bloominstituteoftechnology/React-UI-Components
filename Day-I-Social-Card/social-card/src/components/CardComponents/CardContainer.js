import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    return (
        <a href = "https://www.reactjs.org" className = "react-url">
        <CardBanner />
        <CardContent />
        </a>

    );
};

export default CardContainer;
