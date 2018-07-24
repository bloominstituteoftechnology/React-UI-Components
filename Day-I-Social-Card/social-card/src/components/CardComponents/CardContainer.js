import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <div>
      <div className="card-container">
        <div>
          
        </div>
        <div>
          <CardBanner />
          <CardContent />
        </div>
      </div>
    </div>
  )
}

export default CardContainer;
