import React from 'react';
import './Card.css';

const cardBanner = (props) => {
  return (
    <div className="cardImg">
      <img src={ require('./reactIcon.png') } alt="React Icon"></img>
    </div>
  );
};

export default cardBanner;