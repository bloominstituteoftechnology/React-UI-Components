import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div>
      <button className={`number-button ${props.bgColor}`}>{props.text}</button>
    </div>
  );
};

export default NumberButton;
