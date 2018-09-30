import React from 'react';
import './Card.css';

import CardContent from './CardContent.js';

const CardBanner = () => (
  <div className='card-banner'>
    <img src='https://ibin.co/3wnC6SgIOJud.png' alt='React.js logo'/>
    <CardContent />
  </div>
);

export default CardBanner;
