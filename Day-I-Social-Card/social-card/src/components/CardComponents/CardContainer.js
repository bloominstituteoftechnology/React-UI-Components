import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
function CardContainer() {
    return (
          <div class = "card-container">
      <React.Fragment>
          <CardBanner />;
          <CardContent />;
      </React.Fragment>
          </div>
    );
  }
  
  export default CardContainer;
