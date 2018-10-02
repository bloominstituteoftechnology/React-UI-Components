import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button className={`btn-default ${props.customButton}`} onClick={props.onClick}>{props.text}</button>
  );
}

export default NumberButton;
