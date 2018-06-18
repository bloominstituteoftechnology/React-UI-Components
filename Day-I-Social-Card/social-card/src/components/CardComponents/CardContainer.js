import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
    
    <section className="card-container">
  <div> <CardBanner /> </div>
  <div> <CardContent /> </div>

     </section>);
};

export default CardContainer