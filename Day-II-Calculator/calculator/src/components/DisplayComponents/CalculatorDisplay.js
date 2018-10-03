import React from 'react';
import './Display.css';

const CalculatorDisplay = () => {
  const DisplayProps = {
    number: 0
  }

  return (
    <div className="displayContainer">
      <p>{DisplayProps.number}</p>
    </div>
  )
}

export default CalculatorDisplay;