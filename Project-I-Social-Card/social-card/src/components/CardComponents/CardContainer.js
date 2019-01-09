import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div className="card">
        <a href="https://www.reactjs.org">
        <CardBanner/></a>
        <a href="https://www.reactjs.org">
        <CardContent /></a>

        </div>

    )
}

export default CardContainer;
