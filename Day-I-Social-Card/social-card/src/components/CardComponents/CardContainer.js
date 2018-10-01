import React from 'react';
import './Card.css';
import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = props =>{
    return(
        <div>
            <CardBanner />
            <CardContent />
        </div>
    )
}


export default CardContainer;
