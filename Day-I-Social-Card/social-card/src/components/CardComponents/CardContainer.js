import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  return (
    <React.Fragment>
      <div className="card-container">
        <CardBanner />
        <CardContent />
      </div>
    </React.Fragment>
  )
}

export default CardContainer;
