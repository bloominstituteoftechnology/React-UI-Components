import React from 'react';
import './Row.css';
import NumberButton from '../ButtonComponents/NumberButton'

const Row5 = () => {
  return (
    <div className="Row5">
      <NumberButton label="1" />
      <NumberButton label="2" />
      <NumberButton label="3" />
      <NumberButton label="+" />
    </div>
  );
};

export default Row5
