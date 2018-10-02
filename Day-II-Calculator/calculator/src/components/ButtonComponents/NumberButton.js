import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button className={`NumberButton key-${props.value}`}>
      {props.value}
    </button>
  )
}

export default NumberButton;