import React from 'react';
import './Button.css';


const NumberButton = props => {
  return (
    <button className={`button ${props.buttonStyle}`}>{props.label}</button>
  )
}

export default NumberButton;
