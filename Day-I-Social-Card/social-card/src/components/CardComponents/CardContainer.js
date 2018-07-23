import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner'

const CardContainer = () => {
    return (
    <div className ={'card-container'}><CardContent/>
        <div className ={'image'}><CardBanner/>
        </div>
    </div>
    );
};

export default CardContainer;