import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return (

        <div class="calc-container">
            <div class="answer-bar">
                <div class="answer-content">
                    <div class="answer-text">
                        0
                    </div>
                </div>
            </div>
            <NumberButton />
        </div>
    );
};
export default CalculatorDisplay;