import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
    return (
        <div className="card-container">
            <a href="https://www.reactjs.org">
                <CardBanner/>
                <CardContent/>
            </a>
        </div>
    )
}

export default CardContainer;