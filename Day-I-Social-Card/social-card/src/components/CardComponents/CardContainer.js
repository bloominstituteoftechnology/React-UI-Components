import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
function CardContainer(){
    return(
        <React.Fragment>
            <CardBanner />
            <CardContent />
        </React.Fragment>
    );
}

export default CardContainer;