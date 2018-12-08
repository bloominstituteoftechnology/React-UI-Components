import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = () => {
    return (
        <div className="card_container">
            <a href="https://www.reactjs.org" className="reack_link">
                <CardBanner/>
                <CardContent/>
            </a>
        </div>
    );
};

export default CardContainer;