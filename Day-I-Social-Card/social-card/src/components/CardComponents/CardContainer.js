import React from 'react';
import './Card.css';
import CardBanner from'./CardBanner.js';
import CardContent from './CardContent.js'

const CardContainer=()=>{
    return(
        <div>
    <div>
        <CardBanner/>
    </div>
    <div>
        <CardContent/>
    </div>
    </div>
    )
}

export default CardContainer;