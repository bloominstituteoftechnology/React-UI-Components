import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <button className = {`number-button ${props.type}`}>{props.value}</button>
  );
};

export default NumberButton;
