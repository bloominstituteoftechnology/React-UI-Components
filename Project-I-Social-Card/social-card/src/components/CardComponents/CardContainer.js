import React from 'react';
import './Card.css';
import CardBanner from  './CardBanner.js';
import CardContent from  './CardContent.js';

const CardContainer = () => {
    return (
      <a href="https://www.reactjs.org">
        <div className="CardContainer">
         
      <CardBanner />
      <div className="CardContent">
        <CardContent />
      </div>
    </div>
    </a>
    )
}

export default CardContainer;