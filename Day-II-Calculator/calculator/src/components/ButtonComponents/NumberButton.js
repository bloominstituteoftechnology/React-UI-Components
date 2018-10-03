import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    // <button className='numberButton'>{props.text}</button>
    <button className={props.buttonStyle}>
      {props.text}
    </button>
  );
};

export default NumberButton;