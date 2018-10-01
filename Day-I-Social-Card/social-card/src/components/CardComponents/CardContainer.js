import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = props => {
    return (
     <div className = "cardContent">
        <a href="//www.reactjs.org ">
         <CardBanner></CardBanner>
         <CardContent></CardContent>
        </a>
     </div>
 );
 };

 export default CardContainer;





