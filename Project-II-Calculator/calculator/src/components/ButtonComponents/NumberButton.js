import React from 'react';
import './Button.css';
const NumberButton = props => {
  return (
    <button onClick={props.onClick} className={props.buttonStyle}>
      {props.text}
    </button>
  );
};

export default NumberButton;
