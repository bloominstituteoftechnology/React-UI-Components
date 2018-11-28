import React from 'react';
import './Card.css';

const CardContent = props => {
  return(
    <div className={props.className}>
      <h1>Getting Start With React</h1>
      <p>React Makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p className='source'>reactjs.org</p>
    </div>
  );
}

export default CardContent;
