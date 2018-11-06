import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
      <div className="url" onClick={myFunc}>
        <CardBanner />
        <CardContent cardTitle="Get Started with React" cardDescription="React makes it lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cardUrl='https://reactjs.org' cardUrlContnent="reactjs.org"/>
      </div>
    );
  }

  function myFunc(){
    window.open('https://reactjs.org');
  }
  
  export default CardContainer;
