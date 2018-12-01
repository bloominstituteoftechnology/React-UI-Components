import React from 'react';
import './Button.css';

const NumberButton = props => {
  if (props.size === 'wide') {
    return (
      <button class="number-button wide" id={props.id}>{props.number}</button>
    )
  }
  else return (
    <button class="number-button" id={props.id}>{props.number}</button>
  )
}

export default NumberButton;
