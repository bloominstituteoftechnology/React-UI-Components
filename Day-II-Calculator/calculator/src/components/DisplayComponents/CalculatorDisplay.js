import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <button className={`DisplayContent`}> {props.number} </button>
    );
  };

export default CalculatorDisplay;
