import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className={`button numberButton ${props.className}`}>{props.number}</div>
  );

};

export default NumberButton;
