import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(){
  return(
    <React.Fragment>
      <CardBanner />
      <CardContent title='Get Started with React' />
      <CardContent description='React makes it painless to create interactive UIs. Design simple views for each state in your application.' />
      <CardContent link='reactjs.org' />
    </React.Fragment>
  );
}

export default CardContainer;
