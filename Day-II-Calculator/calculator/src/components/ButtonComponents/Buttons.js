import React from 'react';
import './Buttons.css';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';

const Buttons = () => {
  return (
    <div className="buttons">
      <NumberButtons />
      <OperatorButtons />
    </div>
  );
};

export default Buttons;