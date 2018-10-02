import React from 'react';
import './Card.css';


const CardContent = props => {
  return (
    <div>
      <div className='card-title'>Get started with React</div>
      <div className='card-contents'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</div>
      <div className='card-contents-source'>reactjs.org</div>
    </div>
  );
}

export default CardContent;