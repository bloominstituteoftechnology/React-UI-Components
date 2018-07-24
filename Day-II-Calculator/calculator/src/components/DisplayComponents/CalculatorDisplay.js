import React from 'react';
import './Display.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
    return (
        <div className="calculator">
            <div className="calculator-display">0</div>
            <div className="calculator-keys">
                <div className="row">
                    <ActionButton className="key-clear" />
                    <ActionButton className="key-divide" />
                </div>
                <div className="row">
                    <NumberButton className="key-7" />
                    <NumbernButton className="key-8" />
                    <NumberButton className="key-9" />
                    <ActionButton className="key-multiply" />
                </div>
                <div className="row">
                    <NumberButton className="key-4" />
                    <NumbernButton className="key-5" />
                    <NumberButton className="key-6" />
                    <ActionButton className="key-subtract" />
                </div>
                <div className="row">
                    <NumberButton className="key-1" />
                    <NumbernButton className="key-2" />
                    <NumberButton className="key-3" />
                    <ActionButton className="key-add" />
                </div>
                <div className="row">
                    <NumberButton className="key-0" />
                    <ActionButton className="key-equals" />
                </div>
            </div>
        </div>
    )
};

export default CalculatorDisplay;