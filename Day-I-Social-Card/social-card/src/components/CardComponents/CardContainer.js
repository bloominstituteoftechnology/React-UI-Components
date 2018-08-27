import React from 'react';
import './Card.css';

import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';

const CardContainer = () => (
  <div className='card-container'>

    <CardBanner />
    <CardContent />

  </div>
)
export default CardContainer;
