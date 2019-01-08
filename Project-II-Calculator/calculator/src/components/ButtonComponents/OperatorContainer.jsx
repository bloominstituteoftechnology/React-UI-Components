import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';

const OperatorContainer = props => {
  return (
    <div className="operator-container">
      <OperatorButton text="÷" />
      <OperatorButton text="x" />
      <OperatorButton text="-" />
      <OperatorButton text="+" />
      <OperatorButton text="=" />
    </div>
  );
};

export default OperatorContainer;
