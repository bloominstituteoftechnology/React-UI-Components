import React from 'react';
import './Card.css';

function CardBanner ({children}) {
    return (
      <div className="card-banner-container">
        <div className="logo"></div>
        {children}
      </div>
    )
  }
  
  export default CardBanner