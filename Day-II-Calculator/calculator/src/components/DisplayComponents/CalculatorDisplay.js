import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'

const CalculatorDisplay = () => {
    return (<div className="calc-container">
        <div className="output">0</div>
        <div className="row">
        <ActionButton actionStyle="action-button" text="clear" />
        <NumberButton className="number-button" customStyle="mutator" text="÷" />
        </div>
        <div className="row">
        <NumberButton className="number-button" text="7" />
        <NumberButton className="number-button" text="8" />
        <NumberButton className="number-button" text="9" />
        <NumberButton className="number-button" customStyle="mutator" text="x" />
        </div>
        <div className="row">
        <NumberButton className="number-button" text="4" />
        <NumberButton className="number-button" text="5" />
        <NumberButton className="number-button" text="6" />
        <NumberButton className="number-button" customStyle="mutator" text="-" />
        </div>
        <div className="row">
        <NumberButton className="number-button" text="1" />
        <NumberButton className="number-button" text="2" />
        <NumberButton className="number-button" text="3" />
        <NumberButton className="number-button" customStyle="mutator" text="+" />
        </div>
        <div className="row">
        <ActionButton actionStyle="action-button" text="0" />
        <NumberButton buttonStyle="number-button" customStyle="mutator" text="=" />
        </div>


    </div>);
}

export default CalculatorDisplay;


