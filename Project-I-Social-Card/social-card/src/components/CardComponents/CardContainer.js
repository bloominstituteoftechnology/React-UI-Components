import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        <a className = "containerLink" href ="https://reactjs.org/">
        <div className = "bottom">
        <CardBanner/>
        <CardContent/>
        <h6>reactjs.org</h6>
        </div>
        
        </a>
    )
}

export default CardContainer;
