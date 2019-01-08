import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <p
      className={`button number-button ${props.fontWeight} ${
        props.backgroundColor
      } ${props.fontWeight}`}
    >
      {props.text}
    </p>
  );
};

export default NumberButton;
