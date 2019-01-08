import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <p
      className={`button number-button ${props.width} ${props.fontWeight}`}
      onClick={props.clicked}
    >
      {props.text}
    </p>
  );
};

export default NumberButton;
