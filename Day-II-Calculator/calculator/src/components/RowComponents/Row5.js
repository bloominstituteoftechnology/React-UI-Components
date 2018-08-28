import React from 'react';
import './Row.css';
import NumberButton from '../ButtonComponents/NumberButton'

const Row5 = () => {
  return (
    <div className="Row5">
      <NumberButton buttonStyle="number" label="1" />
      <NumberButton buttonStyle="number" label="2" />
      <NumberButton buttonStyle="number" label="3" />
      <NumberButton buttonStyle="operation" label="+" />
    </div>
  );
};

export default Row5
