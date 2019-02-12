import React from 'react';
import './Button.css';

const Number = props => {
  return (
    <button className={`number-button ${props.bgColor}`}>{props.text}</button>
  );
};

export default Number;