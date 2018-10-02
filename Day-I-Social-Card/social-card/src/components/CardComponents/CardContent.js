import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <section className='card-content'>
      <h1>
        Get started with React
      </h1>
      <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      <a  className='react-link' href='https://www.reactjs.org/'>
      reactjs.org
      </a>
    </section>
  );
}

export default CardContent;
