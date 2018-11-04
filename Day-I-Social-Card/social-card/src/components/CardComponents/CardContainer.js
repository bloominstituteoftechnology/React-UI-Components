import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = props => {
    return (
        <div className='link'>
             <a href='https://www.reactjs.org' target='_blank' rel='noopener noreferrer'>
            <CardBanner />
            <CardContent />
            </a>
        </div>
       
    );
};

export default CardContainer;
