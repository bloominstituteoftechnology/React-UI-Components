import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import CardContent from './CardContent';

let Card = () => {
    return (
        <div className="card">
            <Banner />
            <CardContent />
        </div>
    )
}

export default Card;