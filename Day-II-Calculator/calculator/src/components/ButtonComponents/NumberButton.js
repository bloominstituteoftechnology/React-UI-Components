import React from 'react';
import '../../index.css';

const NumberButton = props => {
  return (
    <button
      className={`button ${props.buttonStyle}`}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export default NumberButton;
