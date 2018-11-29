import React from 'react';
import './Card.css';
import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';

const CardContentContainer= ()=>{
    return(
        <div className="card-content-container">
            <CardBanner />
            <CardContent />
        </div>
    );
}

export default CardContentContainer;