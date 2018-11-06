import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <React.Fragment>
        <div className='main-content'>
            <CardBanner />
            <div className='content'>
                <CardContent />
            </div>
        </div>
        </React.Fragment>
    );   
};

export default CardContainer;