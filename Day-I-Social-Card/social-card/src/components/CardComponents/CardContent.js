import React from 'react';
import './Card.css';

const CardContent = (props) => {
  return (
    <div className='cardContent'>
      <h3 className='cardContentHeader'>Get started with React</h3>
      <p className='cardContentParagraph'>React makes it painless to make interactive UIs. Design simple views for each state in your application.</p>
      <a href='https://reactjs.org/' className='srcLink'>reactjs.org</a>
    </div>
  )
}

export default CardContent;