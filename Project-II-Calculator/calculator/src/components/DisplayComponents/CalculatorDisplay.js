import React from 'react';
import './Display.css';
/*
const Display = () => {
    return (
        <div className = 'calculator-display'>
            <p>0 </p>
        </div>
    )
}
*/

/*const CalculatorDisplay = () => {
    return <div className="calc-total">0</div>;
};
*/
  
const CalculatorDisplay = (props) => {
    return (
        <div className="display-container">
            <span className="display">0</span>
        </div>
    )
}
export default CalculatorDisplay;