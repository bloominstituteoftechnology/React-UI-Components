import React from 'react';
import './Display.css';

const number = '0';

const CalculatorDisplay = () => {
    return (
        <div className='calcDisplay'>
            <p className='total'>{number}</p>
        </div>
    );
};

export default CalculatorDisplay;