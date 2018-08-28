import React from 'react';
import './Row.css';
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const Row2 = () => {
  return (
    <div className="Row2">
      <ActionButton label="clear" />
      <NumberButton label="÷" />
    </div>
  );
};

export default Row2
