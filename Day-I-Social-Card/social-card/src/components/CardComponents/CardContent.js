import React from 'react';
import './Card.css';

const CardTitle = props => {
  return (
    <h1 style={{fontWeight: 800, marginBottom: '5px'}}>Get started with React</h1>
  );
};

const CardInfo = props => {
  return (
    <p style={{marginBottom: '5px'}}>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
  );
};

const CardUrl = props => {
  const lightGray = '#ACB5BF';

  return (
    <p style={{color: lightGray}}>reactjs.org</p>
  );
};

const CardContent = props => {
  return (
    <div className="card-text">
      <CardTitle />
      <CardInfo />
      <CardUrl />
    </div>
  );
};

export default CardContent;
