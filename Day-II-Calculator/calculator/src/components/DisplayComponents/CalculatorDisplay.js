import React from 'react';
import '../../index.css';

const CalculatorDisplay = props => {
  return (
    <div>
      <h1 className={`display ${props.buttonStyle}`}>{props.display}</h1>
    </div>
  );
};

export default CalculatorDisplay;
