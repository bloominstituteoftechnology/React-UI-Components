import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div className="calculator">
            <div className="calculator-screen"><h1 className="calculator-screen-input"></h1></div>
            
            <div className="calculator_buttons">
            <NumberButton />
            <ActionButton />
            </div>
        </div>
    );
};

export default CalculatorDisplay;
