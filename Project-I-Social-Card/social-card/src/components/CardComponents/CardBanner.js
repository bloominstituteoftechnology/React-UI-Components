import React from 'react';
import './Card.css';


const CardBanner = props => {
  return (
    <img className="banner-image" src={props.postImage} alt="React Logo" />
  );
}

export default CardBanner;