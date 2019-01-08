import React from 'react';
import './Button.css';

const OperatorButton = props => {
  return (
    <p
      className={`button operator-button ${props.fontWeight} ${
        props.backgroundColor
      } ${props.fontWeight}`}
    >
      {props.text}
    </p>
  );
};

export default OperatorButton;
