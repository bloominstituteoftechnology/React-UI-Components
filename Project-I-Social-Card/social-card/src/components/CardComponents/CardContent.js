import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
  <div className='banner-content'>
    <h3>{props.bannerTitle}</h3>
    <p>{props.bannerContent}</p>
    <p className="react-text">{props.bannerLink}</p>
  </div>
  )
}

export default CardContent;