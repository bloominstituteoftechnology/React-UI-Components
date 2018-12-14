import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button className={`button ${props.color}`}>{props.text}</button>
  )
}
export default NumberButton;
