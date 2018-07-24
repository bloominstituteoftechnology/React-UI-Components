import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
  return (
    <div class={props.customClass}>
      {props.value}
    </div>
  );
};

export default CalculatorDisplay;
