import React from 'react';
import './Display.css';

const CalculatorDisplay = () => {
    return (
        <div className="calculator">
            <button className="calculator-key key-divide">÷</button>
            <button className="calculator-key key-multiply">×</button>
            <button className="calculator-key key-subtract">-</button>
            <button className="calculator-key key-add">+</button>
            <button className="calculator-key key-equals">=</button>
        </div>
    )
};

export default CalculatorDisplay;