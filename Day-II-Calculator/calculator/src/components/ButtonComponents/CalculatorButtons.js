import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const CalculatorButtons = () => {
    return (
        <div className="buttons">
            <div className="number-pad">
                <ActionButton text="clear" buttonStyle="button button-action" />
                <NumberButton text="7" buttonStyle="button button-number" />
                <NumberButton text="8" buttonStyle="button button-number" />
                <NumberButton text="9" buttonStyle="button button-number" />
                <NumberButton text="4" buttonStyle="button button-number" />
                <NumberButton text="5" buttonStyle="button button-number" />
                <NumberButton text="6" buttonStyle="button button-number" />
                <NumberButton text="1" buttonStyle="button button-number" />
                <NumberButton text="2" buttonStyle="button button-number" />
                <ActionButton text="3" buttonStyle="button button-number" />
                <ActionButton text="0" buttonStyle="button button-action" />
            </div>
            <div class="operators">
                <NumberButton text="&divide;" buttonStyle="button button-operator" />
                <NumberButton text="&times;" buttonStyle="button button-operator" />
                <NumberButton text="&minus;" buttonStyle="button button-operator" />
                <NumberButton text="&#43;" buttonStyle="button button-operator" />
                <NumberButton text="&#61;" buttonStyle="button button-operator" />
            </div>
        </div>
    );
}

export default CalculatorButtons