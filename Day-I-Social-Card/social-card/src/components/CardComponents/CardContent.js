import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className='card-content'>
      <h4>{props.title}</h4>
      <p>{props.copy}</p>
      <a href='#'>reactjs.org</a>
    </div>
  );
}

export default CardContent;