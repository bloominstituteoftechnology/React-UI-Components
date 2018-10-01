import React from 'react';

// import styling
import './Card.css';

// import components
import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => (
  <div className="card-container">
    <CardBanner />
    <CardContent />
  </div>
)

export default CardContainer