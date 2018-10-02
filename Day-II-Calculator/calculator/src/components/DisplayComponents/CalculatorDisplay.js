import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () =>{
    return(
        <div className="calculator">
            <div className="total">
                <h1>0</h1> 
            </div>

            <div className="button-container">
                <ActionButton buttonStyle="clear-button" text="clear"/>
                <ActionButton buttonStyle="operator" text="÷" />
            </div>

            <div className="button-container">
                <NumberButton buttonStyle="number-button" text="7" />
                <NumberButton buttonStyle="number-button" text="8" />
                <NumberButton buttonStyle="number-button" text="9" />
                <ActionButton buttonStyle="operator" text="×" />
            </div>

            <div className="button-container">
                <NumberButton buttonStyle="number-button" text="4" />
                <NumberButton buttonStyle="number-button" text="5" />
                <NumberButton buttonStyle="number-button" text="6" />
                <ActionButton buttonStyle="operator" text="−" />
            </div>

            <div className="button-container">
                <NumberButton buttonStyle="number-button" text="1" />
                <NumberButton buttonStyle="number-button" text="2" />
                <NumberButton buttonStyle="number-button" text="3" />
                <ActionButton buttonStyle="operator" text="+" />
            </div>

            <div className="button-container">
                <NumberButton buttonStyle="zero-button" text="0" />
                <ActionButton buttonStyle="operator" text="=" />
            </div>
        </div>
    );
}
export default CalculatorDisplay;