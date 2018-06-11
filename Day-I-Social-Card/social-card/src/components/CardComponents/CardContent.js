import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className='content'>
      <p className='title'>Get started with React</p>
      <p className='desc'>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
      <div className="link-container">
      <a href="reactjs.org" target="_blank" className="react-link">reactjs.org</a>
        </div>
    </div>
  )
}

export default CardContent