import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div class="number-button">{props.number}</div>
  )
}

export default NumberButton;
