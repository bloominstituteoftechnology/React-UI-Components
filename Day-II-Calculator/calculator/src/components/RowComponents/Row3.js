import React from 'react';
import './Row.css';
import NumberButton from '../ButtonComponents/NumberButton'

const Row3 = () => {
  return (
    <div className="Row3">
      <NumberButton label="7" />
      <NumberButton label="8" />
      <NumberButton label="9" />
      <NumberButton label="x" />
    </div>
  );
};

export default Row3
