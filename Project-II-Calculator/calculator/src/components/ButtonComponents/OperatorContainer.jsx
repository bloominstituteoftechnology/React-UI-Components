import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';

const OperatorContainer = props => {
  return (
    <div className="operator-container">
      <OperatorButton text="x" />
    </div>
  );
};

export default OperatorContainer;
