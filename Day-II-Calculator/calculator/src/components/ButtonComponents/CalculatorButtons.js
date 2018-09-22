import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const CalculatorButtons = () => {
    return (
        <div className="buttons">
            <div className="number-pad">
                <ActionButton text="0" displayStyle="action-button" />
                <NumberButton text="1" displayStyle="number-button" />
                <NumberButton text="2" displayStyle="number-button" />
                <NumberButton text="3" displayStyle="number-button" />
                <NumberButton text="4" displayStyle="number-button" />
                <NumberButton text="5" displayStyle="number-button" />
                <NumberButton text="6" displayStyle="number-button" />
                <NumberButton text="7" displayStyle="number-button" />
                <NumberButton text="8" displayStyle="number-button" />
                <ActionButton text="9" displayStyle="number-button" />
                <ActionButton text="clear" displayStyle="action-button" />
            </div>
            <div class="operators">
                <NumberButton text="&divide;" displayStyle="operator-button" />
                <NumberButton text="&times;" displayStyle="operator-button" />
                <NumberButton text="&minus;" displayStyle="operator-button" />
                <NumberButton text="&#43;" displayStyle="operator-button" />
                <NumberButton text="&#61;" displayStyle="operator-button" />
            </div>
        </div>
    );
}

export default CalculatorButtons