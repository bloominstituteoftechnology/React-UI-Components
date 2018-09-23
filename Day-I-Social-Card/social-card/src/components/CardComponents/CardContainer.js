import React from 'react';
import './Card.css';
import CardContent from './CardContent'
import CardBanner from './CardBanner'

const CardContainer = () =>{
    return(
        <a href="https://reactjs.org" className ="card-container">
        <CardBanner />
        <CardContent />
        </a>
    )
}
export default CardContainer;