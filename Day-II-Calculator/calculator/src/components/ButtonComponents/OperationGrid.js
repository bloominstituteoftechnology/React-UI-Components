import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js';

const OperationGrid = props => {
  return (
    <div className="operation-wrapper">
      <ActionButton name="÷" styles="button operation" />
      <ActionButton name="x" styles="button operation" />
      <ActionButton name="-" styles="button operation" />
      <ActionButton name="+" styles="button operation" />
      <ActionButton name="=" styles="button operation" />
    </div>
  )
}

export default OperationGrid;
