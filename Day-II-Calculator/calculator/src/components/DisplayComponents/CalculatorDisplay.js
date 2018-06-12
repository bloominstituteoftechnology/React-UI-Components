import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return <div className="display">{props.totalValue}</div>
  }

  export default CalculatorDisplay;