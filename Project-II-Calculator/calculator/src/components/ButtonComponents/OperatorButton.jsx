import React from 'react';
import './Button.css';

const OperatorButton = props => {
  return (
    <p className="button operator-button">{props.text} </p>
  );
};

export default OperatorButton;
