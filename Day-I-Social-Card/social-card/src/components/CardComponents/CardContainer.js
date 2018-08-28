import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';
import CardBanner from './CardBanner';
const CardContainer = () => {
    return (
        <div className='card-container'>
            <CardBanner />
            <CardContent />
        </div>
    )
}
export default CardContainer;