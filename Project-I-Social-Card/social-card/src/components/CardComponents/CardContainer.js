import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = props => {
    return (
        <div className='content-top'>
            <CardBanner />
            <div className='content-bottom'>
                <CardContent />
            </div>
        </div>
    )
}

export default CardContainer;