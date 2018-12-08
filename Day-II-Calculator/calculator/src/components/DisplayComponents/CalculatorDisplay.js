import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) =>{
  return (
    <div className='display'>
      <div>
        {props.displayValue}
      </div>
    </div>
  );
}

export default CalculatorDisplay;
