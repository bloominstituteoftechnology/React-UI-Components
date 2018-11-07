import React from 'react';
import './Card.css';

function CardContent(props){
  return(
    <div className='allContent'>
      <h2 className='header'>{props.title}</h2>
      <p className='content'>{props.description}</p>
      <p className='footer'>{props.link}</p>
    </div>
  )
}

export default CardContent;
