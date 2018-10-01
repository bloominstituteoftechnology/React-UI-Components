import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <a href={props.url}>
      <div className="CardContent">
        <h3>{props.bannerTitle}</h3>
        <p className="bannerContent">{props.bannerContent}</p>
        <div className="displayURL">{props.displayURL}</div>
      </div>
    </a>
  )
}

export default CardContent;