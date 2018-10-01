import React from 'react';
import './Card.css';

const CardContent = props => {
  return (

    <div className="CardContent">
      <h3>{props.bannerTitle}</h3>
      <p className="bannerContent">{props.bannerContent}</p>
      <div className="displayURL">{props.displayURL}</div>
    </div>
  )
}

export default CardContent;