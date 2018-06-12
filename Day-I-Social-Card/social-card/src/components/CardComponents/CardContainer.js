import React from 'react';
import './Card.css';
// MY CODE BELOW
import CardBanner from './CardBanner' ;
import CardContent from './CardContent' ;
const CardContainer = () => {
    return (
        <div className="card-wrapper">
            <CardBanner />
            <CardContent />            
        </div>
    )
} ;
export default CardContainer ;
