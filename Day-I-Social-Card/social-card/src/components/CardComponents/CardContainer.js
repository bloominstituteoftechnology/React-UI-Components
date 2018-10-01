import React from 'react';
import './Card.css';
import CardBanner from'./CardBanner.js';
import CardContent from './CardContent.js'

const CardContainer=()=>{
    return(
        
        <div>
            <a href="https://www.reactjs.org" className="nounder">
    <div>
        <CardBanner/>
    </div>
    <div>
        <CardContent/>
    </div>
    </a>
    </div>
    
    )
}

export default CardContainer;