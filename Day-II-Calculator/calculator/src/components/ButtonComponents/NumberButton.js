import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <button className={`number-button ${props.style}`}>{props.text}</button>
  );
}

export default NumberButton;
