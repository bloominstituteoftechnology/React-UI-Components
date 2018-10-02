import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'; 
import CardContent from './CardContent';

const cardContent=()=>{
    return(
        <div className="card-content">
        <div className="card-items">
        <CardBanner />
        <CardContent />
        </div>
        </div>
    ) 
}
export default cardContent; 