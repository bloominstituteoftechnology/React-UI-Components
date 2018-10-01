import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';
import reactImg from './3wnC6SgIOJud.png';


const CardImage = () => {
  return (
    <div className="cardImage">
      <img src={reactImg} alt="ReactJS logo" />
    </div>
  )
}

const CardContainer = () => {
  return (
    <div className="cardContainer">
      <CardImage />
      <CardContent />
    </div>
  )
}

export default CardContainer;