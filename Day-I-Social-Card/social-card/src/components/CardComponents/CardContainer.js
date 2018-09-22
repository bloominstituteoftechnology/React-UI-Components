import React from 'react';
import './Card.css';
import Banner from'./CardBanner';
import CardTitle from './CardHeader';
import CardContent from './CardContent';
import Website from './Website';



const CardContainer = () => {
    return (
       <div className="bottom">
        <Banner />
        <CardTitle />
        <CardContent />
        <Website />
        </div>
    );
  };

  export default CardContainer;
