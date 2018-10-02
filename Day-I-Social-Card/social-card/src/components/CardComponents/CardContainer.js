import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
  return (
    <a href={props.URL}>
      <div className="CardContainer">
        <CardBanner source="https://cdn-images-1.medium.com/max/1600/1*jDIj2SKAE-Bp32owLoHDjw.png" alt="Check out react!" />
        <CardContent
          URL="reactjs.org"
          bannerTitle="Get started with React"
          bannerContent="React makes it painless to create interactive UIs. Design simple views for each state in your application."
          displayURL="reactjs.org" />
      </div>
    </a>
  )
}

export default CardContainer;