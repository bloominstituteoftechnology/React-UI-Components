import React from 'react';
import './Card.css';

const CardBanner = props => {
  return (
    <div className="CardBanner ">
      <img src={props.source} alt={props.alt} />
    </div>
  )
}

export default CardBanner;