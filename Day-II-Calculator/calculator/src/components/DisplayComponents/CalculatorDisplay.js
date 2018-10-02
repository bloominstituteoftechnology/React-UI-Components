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
                <ActionButton button-style="clear-button" text="clear"/>
                <ActionButton button-style="operator" text="÷" />
            </div>

            <div className="button-container">
                <NumberButton button-style="number-button" text="7" />
                <NumberButton button-style="number-button" text="8" />
                <NumberButton button-style="number-button" text="9" />
                <ActionButton button-style="operator" text="x" />
            </div>

            <div className="button-container">
                <NumberButton button-style="number-button" text="4" />
                <NumberButton button-style="number-button" text="5" />
                <NumberButton button-style="number-button" text="6" />
                <ActionButton button-style="operator" text="-" />
            </div>

            <div className="button-container">
                <NumberButton button-style="number-button" text="1" />
                <NumberButton button-style="number-button" text="2" />
                <NumberButton button-style="number-button" text="3" />
                <ActionButton button-style="operator" text="+" />
            </div>

            <div className="button-container">
                <NumberButton button-style="zero-button" text="0" />
                <ActionButton button-style="operator" text="=" />
            </div>
        </div>
    );
}
export default CalculatorDisplay;