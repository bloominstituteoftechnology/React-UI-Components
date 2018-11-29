import React from 'react';
import './Card.css';

const CardBanner = props => {
  return (
    <img src={props.img}
      alt='content banner'
    />
  );
}

export default CardBanner;