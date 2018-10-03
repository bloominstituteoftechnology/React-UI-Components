import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button onClick={props.onClick} className={`number-button ${props.bgColor}`}>{props.value}</button>
  );
};

export default NumberButton;
