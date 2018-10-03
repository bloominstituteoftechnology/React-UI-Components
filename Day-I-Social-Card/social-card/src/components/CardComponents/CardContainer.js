import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import CardContent from './CardContent';

let Card = () => {
    return (
        <a href="https://www.reactjs.org" className="card">
            <Banner />
            <CardContent />
        </a>
    )
}

export default Card;