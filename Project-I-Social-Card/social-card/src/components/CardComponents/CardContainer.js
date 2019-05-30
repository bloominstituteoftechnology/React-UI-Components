import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner"
import CardContent from './CardContent';

function CardContainer(){
    return(
        <div className="CardContainer" >
        <a href="https://www.react.js">
        <CardBanner/>
        <CardContent/>
        </a>
        </div>
    )
}

export default CardContainer;