import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () =>{
    return (

        <div style={{marginLeft:"10%"}}>
            <CardBanner/>
            <CardContent />
        </div>
    )
}

export default CardContainer;