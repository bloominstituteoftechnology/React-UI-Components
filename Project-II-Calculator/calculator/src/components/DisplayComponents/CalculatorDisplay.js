import React from 'react';
import CalculatorNumber from './CalculatorNumber';
import './Display.css';

const CalculatorDisplay = () => {
    return (
        <div className='calculatorDisplay'>
            <CalculatorNumber value={0}/>
        </div>
        
    )
}

export default CalculatorDisplay;

