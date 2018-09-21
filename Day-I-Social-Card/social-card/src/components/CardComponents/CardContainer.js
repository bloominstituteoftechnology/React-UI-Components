import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org" className="card-container">
            <CardBanner/>
            <CardContent/>
        </a>
    )
}

export default CardContainer;