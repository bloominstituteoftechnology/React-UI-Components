import React from 'react';

function CalculatorDisplay(props) {
  return (
    <div className="display">{props.value}</div>
  );
}

export default CalculatorDisplay;