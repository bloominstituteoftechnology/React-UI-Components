import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
const CardContent = () => {
  return (
    <div className='card-content'>
    <CardBanner />
      <h2>Get started with React</h2>
      <p>
        React makes it painless to create interactive UIs.  Designs
        simple views for each state in your application.
      </p>
      <h3 className='span'>reactjs.org</h3> 
    </div>
  )
}
export default CardContent;