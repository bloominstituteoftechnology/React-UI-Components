import React from 'react';
import './Row.css';
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const Row2 = () => {
  return (
    <div className="Row2">
      <ActionButton buttonStyle="large" label="clear" />
      <NumberButton buttonStyle="operation" label="÷" />
    </div>
  );
};

export default Row2
