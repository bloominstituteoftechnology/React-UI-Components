import React from 'react';
import './Button.css';

const Number = props => {
  return (
    <button className={`numberButton ${props.color}`}>{props.text}</button>
  );
};

export default Number;
