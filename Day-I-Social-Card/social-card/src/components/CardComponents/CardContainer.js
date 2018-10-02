import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import CardContent from './CardContent';
const CardContainer = ()=>{
    return (
        <div className="card-container">
            <Banner />
            <CardContent />
        </div>
    )
}
export default CardContainer;
