import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div onClick={props.handleNumberClick} className={props.buttonStyle}>
      {props.value}
    </div>
  );
};

export default NumberButton;
