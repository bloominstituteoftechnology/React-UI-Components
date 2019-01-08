import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

const ButtonContainer = props => {
  return (
    <div className="button-container">
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
      <NumberButton text="9" />
    </div>
  );
};

export default ButtonContainer;
