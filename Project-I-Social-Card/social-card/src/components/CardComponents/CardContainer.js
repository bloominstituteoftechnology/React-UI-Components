import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

function CardContainer() {
    return(
        <a href="https://www.reactjs.org">
         <div className="CardContainer">
        
        
        <CardBanner/>
        <CardContent />

        </div>
        </a>

       
    )
        
    
}

export default CardContainer;