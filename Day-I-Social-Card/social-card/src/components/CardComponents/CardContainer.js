import React from 'react';
import './Card.css';

const CardContainer = () => {
  return (
  <div className = 'card-image'>
    <CardBanner />
  </div>
  <div className = 'card-content'>
    <CardContent />
  </div>
  );
};
