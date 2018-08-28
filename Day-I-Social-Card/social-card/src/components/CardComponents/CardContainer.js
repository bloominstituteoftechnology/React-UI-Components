import React from 'react';
import './Card.css';

import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';

const CardContainer = () => (
  <div className='card-container'>
    <a href='https://www.reactjs.org'>

    <CardBanner />
    <CardContent />
    
    </a>
  </div>
)
export default CardContainer;
