import React from 'react';
import './Card.css';

import CardContainer from './CardContainer';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='card-container'>
            <CardBanner />
            <CardContent />
        </div>
        
    );
}

export default CardContainer;