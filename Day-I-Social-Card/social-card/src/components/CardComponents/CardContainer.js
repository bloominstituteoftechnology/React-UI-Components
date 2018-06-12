import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
    return (<div onClick={() => window.open('https://reactjs.org', '_blank')} target='_blank' className='card-container'>
        <CardBanner />
        <CardContent />
    </div>
    );
}

export default CardContainer;