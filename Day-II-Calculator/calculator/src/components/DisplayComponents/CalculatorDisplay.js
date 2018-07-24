import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="display-container">
      <p className="display-content">{props.number}</p>
    </div>
  );
};

export default CalculatorDisplay;