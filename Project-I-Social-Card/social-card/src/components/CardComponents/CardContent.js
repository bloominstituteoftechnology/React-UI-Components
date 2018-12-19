import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
  <div>
    <h3>{props.bannerTitle}</h3>
    <p>{props.bannerContent}</p>
    <a href={props.bannerLinkHref}>{props.bannerLink}</a>
  </div>
  )
}

export default CardContent;