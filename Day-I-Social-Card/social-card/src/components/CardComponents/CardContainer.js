import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <a href="reactjs.org" target="blank">
            <div className="card-container-wrapper">
                <CardBanner />
                <CardContent />
            </div>
        </a>
    );
};

export default CardContainer;