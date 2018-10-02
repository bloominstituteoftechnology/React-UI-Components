import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () =>{
    return(
        <div className="calculator-container">
            <div className="total">
                <h1>0</h1> 
            </div>

            <div className="button-container">
                <ActionButton button-style="clear-button" text="clear"/>
                <ActionButton button-style="operator" text="÷" />
            </div>

            

            <div className="button-container">
                <NumberButton button-style="zero-button" text="0" />
                <ActionButton button-style="operator" text="=" />
            </div>
        </div>
    );
}
export default CalculatorDisplay;