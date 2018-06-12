import React from 'react';
import './Button.css';

function NumberButton(props) {
    return <button className={props.buttonStyle} onClick={() => props.onClick(props.value)}>{props.text}</button>
  }

  export default NumberButton;