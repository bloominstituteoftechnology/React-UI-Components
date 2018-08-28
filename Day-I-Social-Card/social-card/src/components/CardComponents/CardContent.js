import React from 'react';
import './Card.css';

const CardContent = (props) => {
  return (
    <div className='card-content'>
      <h1>{props.title}</h1>
      <p className='content'>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <p className='link'>{props.link}</p>
    </div>
  );
}

export default CardContent;