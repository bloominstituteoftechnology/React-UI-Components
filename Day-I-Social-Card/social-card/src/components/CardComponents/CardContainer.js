import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => (
    <div className='card-container'>
        <div className='left-column'></div>
        <div className='right-card right-column'>
            <a href='https://www.reactjs.org'>
                <CardBanner />
                <CardContent />
            </a>
        </div>
    </div>
);

export default CardContainer;
