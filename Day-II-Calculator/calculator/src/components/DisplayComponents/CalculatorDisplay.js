import React from 'react';
import './Display.css';

const CalculatorDisplay = ({result = 0}) => {
    return (
        <div className='result-display'>
            {result}
        </div>
    );
}

export default CalculatorDisplay;