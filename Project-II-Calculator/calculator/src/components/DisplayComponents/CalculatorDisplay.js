import React from 'react';
import './Display.css';

export default function CalculatorDisplay(props) {
  const { val } = props;
  return (
    <div className="display">
      {val}
    </div>
  )
}


