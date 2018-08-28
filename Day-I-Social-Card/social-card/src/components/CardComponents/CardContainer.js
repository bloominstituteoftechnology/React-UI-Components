import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
// import Footer from './components/FooterComponents/Footer';

const CardContainer = () => {
  return (
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;