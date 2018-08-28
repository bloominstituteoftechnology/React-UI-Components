import React from 'react';
import './Row.css';
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton'

const Row6 = () => {
  return (
    <div className="Row6">
      <ActionButton label="0" />
      <NumberButton label="=" />
    </div>
  );
};

export default Row6
