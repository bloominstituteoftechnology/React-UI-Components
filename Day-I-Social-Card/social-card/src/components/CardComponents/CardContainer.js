import React from 'react';
import './Card.css';

import banner from '../../img/react-banner.jpeg';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = props => {
  return (
    <a className = {props.className} href="https://www.reactjs.org">
      <CardBanner imgSrc={banner} />
      <CardContent className="cardContainer__content"/>
    </a>
  );
}

export default CardContainer;
