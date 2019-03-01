import React from 'react';
import './Card.css';
import './CardBanner'
import CardBanner from './CardBanner';
import CardContent from './CardContent'


const CardContainer = () => {
    
    return (
        <a href="https://reactjs.org">
        <div className='card-container'>
            <CardBanner />
            <CardContent />
            
        </div>
        </a>
    )
}

export default CardContainer;
