import React from 'react';
import './Card.css';


import CardBanner from './CardBanner';
import CardContent from './CardContent';



 const CardContainer = () => {
  // function myFunction(){
  //   console.log("hello")
  // }

  return (
    <div className="cardContainer"  >
      <a href="https://www.reactjs.org">
      <CardBanner />
      <h1> React is so nice and cool. I wish I knew how to do it better.</h1>

      <CardContent />
      </a>
    </div>
  ) 
}
 export default CardContainer; 