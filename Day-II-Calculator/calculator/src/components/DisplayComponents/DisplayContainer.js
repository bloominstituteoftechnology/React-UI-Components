import React from 'react';
import './Display.css';
import CalculatorDisplay from './CalculatorDisplay';

const CalculatorContainer = () => {
    return (
        <div className="display-container">
            <CalculatorDisplay />
        </div>
    );
};

export default CalculatorContainer;