import React from 'react';
// import './Display.css';
import NumberDisplay from './NumberDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorDisplay = props => {
    console.log(props);
  return (
      <div className="calc-container">
       <NumberDisplay 
        number = {0}
       />
       <NumberButton />
       <ActionButton />
      </div>
  );
};

export default CalculatorDisplay;