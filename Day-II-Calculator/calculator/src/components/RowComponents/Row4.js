import React from 'react';
import './Row.css';
import NumberButton from '../ButtonComponents/NumberButton'

const Row4 = () => {
  return (
    <div className="Row4">
      <NumberButton label="4" />
      <NumberButton label="5" />
      <NumberButton label="6" />
      <NumberButton label="-" />
    </div>
  );
};

export default Row4
