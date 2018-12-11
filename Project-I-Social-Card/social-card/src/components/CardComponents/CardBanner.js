import React from 'react';
import './Card.css';

const CardBanner = props => {
  return <img src={props.source} class="card-banner" alt="card banner" />;
};

export default CardBanner;