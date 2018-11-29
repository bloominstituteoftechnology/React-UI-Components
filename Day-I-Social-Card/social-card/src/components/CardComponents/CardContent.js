import React from 'react';
import './Card.css';

const CardContent = (props) => {
  return (
    <div className='card-content'>
      <h4>Get started with React</h4>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <a href='https://www.reactjs.org' target="_blank">reactjs.org</a>
    </div>
  )
}

export default CardContent; 