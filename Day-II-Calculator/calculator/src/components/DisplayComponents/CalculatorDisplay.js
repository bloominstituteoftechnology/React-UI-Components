import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';


const CalculatorDisplay = () => {
    return (
        <div className="calcDisplay">
        <NumberButton />
        <ActionButton />
        </div>
    );
};


export default CalculatorDisplay;