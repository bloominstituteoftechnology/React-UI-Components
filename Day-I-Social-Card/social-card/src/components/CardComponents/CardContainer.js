import React from 'react';
import './Card.css';

import CardContent from './CardContent'
import CardBanner from './CardBanner'


const CardContainer = props => {
    return (
        <div className='cardContainerWrapper'>
            <div className='cardWrapper'>
                <CardBanner />
                <CardContent />
            </div>
        </div>
    );
};
export default CardContainer;