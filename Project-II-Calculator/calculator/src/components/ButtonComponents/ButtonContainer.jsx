import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const ButtonContainer = props => {
  return (
    <div className="button-container">
      <NumberButton text="clear" width="wide" fontWeight="light" />
      <NumberButton text="9" />
      <NumberButton text="8" />
      <NumberButton text="7" />
      <NumberButton text="6" />
      <NumberButton text="5" />
      <NumberButton text="4" />
      <NumberButton text="3" />
      <NumberButton text="2" />
      <NumberButton text="1" />
      <NumberButton text="0" width="wide" />
    </div>
  );
};

export default ButtonContainer;
