import React from 'react';
import './Card.css';

import banner from '../../img/react-banner.jpeg';
import CardBanner from './CardBanner.js'

const CardContainer = props => {
  return (
    <div>
      <CardBanner imgSrc={banner} />
    </div>
  );
}

export default CardContainer;
