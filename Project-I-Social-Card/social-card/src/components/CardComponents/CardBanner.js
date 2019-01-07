import React from 'react';
import './Card.css';


const CardBanner = props => {
  return (
    <img className="banner-image" src={props.postImage} />
  );
}

export default CardBanner;