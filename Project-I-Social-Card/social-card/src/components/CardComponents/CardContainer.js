import React from 'react';
import './Card.css';


const CardContainer = () => {
  return <div className="card-container">
    <CardBanner />;
    <CardContent />;
  </div>

}

export default CardContainer;