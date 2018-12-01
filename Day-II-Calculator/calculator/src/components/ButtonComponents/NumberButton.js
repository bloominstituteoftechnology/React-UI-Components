import React from 'react';
import './Button.css';

const NumberButton = (props) =>{
  return (
    <div className={props.className}>
      <span>{props.value}</span>
    </div>
  );
}

export default NumberButton;
