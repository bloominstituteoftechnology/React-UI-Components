import React from 'react';
import './Display.css';

import TotalComponent from './TotalComponent';
import NumberComponent from '../ButtonComponents/NumberButton';
import ActionComponent from '../ButtonComponents/ActionButton';


const CalculatorComponent = () => {

    return (
        <div className="calculator-container">
            <div className="total-container">
                <TotalComponent />
            </div>   
            <div className="button-container">
                <NumberComponent />
                <ActionComponent />
            </div>
        </div>
    );
}

export default CalculatorComponent;