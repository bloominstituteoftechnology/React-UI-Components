import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = props => {
    return (
    
    <div className= "Card-Container">
    
    <div className="card-wrapper">
    <a href="https://www.reactjs.org/"></a>
    </div>
    <CardBanner/>
    <CardContent/>
    
    
    </div>
    
    
    
    );
    
    
    
    
    };
    
    
    export default CardContainer;