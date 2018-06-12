import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button className={'button--number '+ props.buttonStyle}>
      <div>{props.text}</div>
    </button>
  );
};

export default NumberButton;