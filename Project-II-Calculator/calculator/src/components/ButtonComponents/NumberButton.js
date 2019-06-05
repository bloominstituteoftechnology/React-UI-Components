import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <div className={props.num.buttonStyle}>{props.num.text}</div>
  )
}

export default NumberButton;
