import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button className={props.buttonStyle}><h1>{props.text}</h1></button>
  )
}

export default NumberButton;
