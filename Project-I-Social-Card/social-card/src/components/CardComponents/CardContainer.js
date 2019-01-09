import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import Footer from '../FooterComponents/Footer';

const CardContainer = props => {
  return (
    <div className='card-container'>
      <CardBanner />
      <CardContent />
      <Footer
        shareCounter={props.shareCounter}
        heartCounter={props.heartCounter}
        isLiked={props.isLiked}
        shareHandler={props.shareHandler}
        heartHandler={props.heartHandler}
      />
    </div>
  );
};

export default CardContainer;
