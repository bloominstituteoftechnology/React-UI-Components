import React from 'react';
import './Card.css';
import Banner from'./CardBanner';
import CardTitle from './CardHeader';
import CardContent from './CardContent';
import Website from './Website';



const Card = () => {
    return (
       <div>
        <Banner />
        <CardTitle />
        <CardContent />
        <Website />
        </div>
    );
  };

  export default Card;
