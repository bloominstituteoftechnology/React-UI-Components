import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='cardContainer'>
            <div className='cardBox'>
                <CardBanner />
                <CardContent />
            </div>
        </div>
    )
}

export default CardContainer;