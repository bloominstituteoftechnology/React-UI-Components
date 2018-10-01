import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className='card-content'>
      <div className='card-title-1'>
        <h3>Get started with React</h3>
      </div>
      <div className='card-text'>
        <p>React makes it painless to creat interactive UIs.
        Design simple views for each state in your application.</p>
      </div>
      <div className='card-title-2'>
        <h4>reactjs.org</h4>
      </div>
    </div>
  )
}

export default CardContent