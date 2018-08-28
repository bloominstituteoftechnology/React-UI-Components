import React from 'react';
import './Card.css';

const CardBanner = (props) => {
  return (
    <img src={props.banner} className='card-banner' alt='' />
  );
}

export default CardBanner;