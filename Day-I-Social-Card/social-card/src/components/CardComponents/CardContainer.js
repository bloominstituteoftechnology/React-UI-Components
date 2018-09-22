import React from 'react';
import './Card.css';
import Banner from'./CardBanner';
import CardContent from './CardContent';



const CardContainer = () => {
    return (
       <div className="bottom">
        <Banner />
        <CardContent />
        </div>
    );
  };

  export default CardContainer;
