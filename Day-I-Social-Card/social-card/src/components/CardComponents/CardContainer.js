import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardContainer = () =>{
  return(
    <div class="card-container">
      <a href="https://www.reactjs.org">
      <CardContent/>
      </a>
    </div>
  )
}

export default CardContainer;