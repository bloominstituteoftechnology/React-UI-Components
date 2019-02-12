import React from 'react';
import './Card.css';

import CardBanner from "./components/CardComponents/CardBanner";
import CardContent from "./components/CardComponents/CardContent";



function CardContainer() {
  return (
    <div className="cards">
      <CardBanner />
      <CardContent />
    </div>
  );
}

export default CardContainer;

