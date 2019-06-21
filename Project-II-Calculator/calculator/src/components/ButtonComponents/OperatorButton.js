import React from 'react';
import './Button.css';

function OperatorButton(props) {
  return (
    <button className={props.buttonStyle}>{props.text}</button>
  )
}

export default OperatorButton;