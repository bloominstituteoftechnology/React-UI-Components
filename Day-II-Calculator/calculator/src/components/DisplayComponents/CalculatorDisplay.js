import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div>
        <NumberButton />
            <ActionButton />
        </div>    
    )
}
 
export default CalculatorDisplay;
