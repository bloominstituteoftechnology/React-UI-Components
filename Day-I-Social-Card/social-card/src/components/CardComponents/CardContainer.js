import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

// Originally written as a class component, but does not require state to function as written.

const CardContainer = () => (
  <div className='card-container'
    onClick={() => window.location.href='https://www.reactjs.org'}>
    <div className='inner-shell'>
      <CardBanner img='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'/>
      <CardContent copy="React makes it painless to create interactive UIs. Design simple views for each state in your application."
        title='Get started with React'
      />
    </div>
  </div>
);

export default CardContainer;