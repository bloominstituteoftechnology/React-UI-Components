import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'; 


const CardContainer = () => {
    return (
    <a className ="atag" href="https://www.reactjs.org" target ="_blank">
    <div  target ="_blank" className="cardContainer">
    
     <CardBanner />
     <CardContent /> 
    


    </div>
    </a>

    );
}

export default CardContainer; 