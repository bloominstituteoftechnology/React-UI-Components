import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
const CardContainer = (props) => {
    return (
        <a href="https://www.reactjs.org" target="_blank" className="cardContain">
            <CardBanner />
            <CardContent />
        </a>
    )
}

export default CardContainer