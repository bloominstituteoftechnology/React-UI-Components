import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <div className = {props.buttonStyle} data-key = {props.content} onClick = {props.function}>{props.content}</div>
  );
};

export default NumberButton;
