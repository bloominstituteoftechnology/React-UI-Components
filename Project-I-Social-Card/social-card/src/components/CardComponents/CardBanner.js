import React from 'react';
import './Card.css';

function CardBanner() {
  return (
    <div className="cardBackground">
      <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
      <div className="border">
        <h2>Get started with React</h2>
        <p>React makes it paunless to create interactive UIs. Design simple views for each state in your application.</p>
        <span>reactjs.org</span>
      </div>
      
    </div>
  )
}

export default CardBanner;