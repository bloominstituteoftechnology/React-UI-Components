import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import Footer from '../FooterComponents/Footer';

const CardContainer = () => {
  return (
    <div className='card-container'>
      <CardBanner />
      <CardContent />
      <Footer />
    </div>
  );
};

export default CardContainer;
