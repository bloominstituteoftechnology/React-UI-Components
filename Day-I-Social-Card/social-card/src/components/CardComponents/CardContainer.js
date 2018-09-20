import React from 'react';
import './Card.css';

import CardBanner from './CardBanner.js';

const CardContainer = () => (
  <a className='card-container' href='https://www.reactjs.org'>
    <CardBanner />
  </a>
);

export default CardContainer;
