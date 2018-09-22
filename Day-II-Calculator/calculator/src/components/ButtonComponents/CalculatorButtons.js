import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const CalculatorButtons = () => {
    return (
        <div className="buttons">
            <div className="number-pad">
                <ActionButton text="0" buttonStyle="button-action" />
                <NumberButton text="1" buttonStyle="button-number" />
                <NumberButton text="2" buttonStyle="button-number" />
                <NumberButton text="3" buttonStyle="button-number" />
                <NumberButton text="4" buttonStyle="button-number" />
                <NumberButton text="5" buttonStyle="button-number" />
                <NumberButton text="6" buttonStyle="button-number" />
                <NumberButton text="7" buttonStyle="button-number" />
                <NumberButton text="8" buttonStyle="button-number" />
                <ActionButton text="9" buttonStyle="button-number" />
                <ActionButton text="clear" buttonStyle="button-action" />
            </div>
            <div class="operators">
                <NumberButton text="&divide;" buttonStyle="button-operator" />
                <NumberButton text="&times;" buttonStyle="button-operator" />
                <NumberButton text="&minus;" buttonStyle="button-operator" />
                <NumberButton text="&#43;" buttonStyle="button-operator" />
                <NumberButton text="&#61;" buttonStyle="button-operator" />
            </div>
        </div>
    );
}

export default CalculatorButtons