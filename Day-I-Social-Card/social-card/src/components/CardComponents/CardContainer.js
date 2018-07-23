import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import Banner from './CardBanner';

const CardContainer = () => {
  return (
    <div className = 'container' onclick = "window.location.href='https://reactjs.org'">
    <Banner />
    <CardContent />
    </div>


  )
};

export default CardContainer;
