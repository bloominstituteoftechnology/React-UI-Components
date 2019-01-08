import React from 'react';

import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="display-area">{props.displayText}</div>
  );
};

export default CalculatorDisplay;