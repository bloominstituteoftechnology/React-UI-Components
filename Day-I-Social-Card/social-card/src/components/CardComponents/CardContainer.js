import React from 'react';
import './Card.css';
import CardContent from '../CardComponents/CardContent.js';
import CardBanner from './CardBanner.js';

const CardContainer = () => {
  return <div onClick={()=> window.open("https://www.reactjs.org", "_blank")} className="card-container">
            <CardBanner />
            <CardContent />
          </div>;
};

export default CardContainer;
