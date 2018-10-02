import React from 'react';
import './Display.css';
import ActionDisplay from './ActionButton';


const CalculatorDisplay = props => { // props = { type: "primary"}

    return (
      <div class = 'calculator-display'> 
        <ActionDisplay/>
      </div>
    );
}

export default CalculatorDisplay;