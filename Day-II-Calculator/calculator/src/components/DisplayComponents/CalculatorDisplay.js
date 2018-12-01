import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div 
      className="display" 
      value={props.number} 
    > {props.number} </div>
  );
};

export default CalculatorDisplay;