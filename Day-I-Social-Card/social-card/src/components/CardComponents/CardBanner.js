import React from 'react';
import './Card.css';

const CardBanner = (props) => {
  return (
    <img src={props.banner} className='card-banner'/>
  );
}

export default CardBanner;