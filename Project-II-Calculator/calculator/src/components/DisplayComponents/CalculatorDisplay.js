import React from 'react';
import './Display.css';

const CalculatorDisplay = ({ display, total }) => {
  return (
    <div className={display}>
      <span>{total}</span>
    </div>
  );
};

export default CalculatorDisplay;
