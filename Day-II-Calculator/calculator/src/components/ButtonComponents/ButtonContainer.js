import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

function ButtonContainer() {
    return (
        <div className="calculator-buttons-area">
            <div className="numbers-clear-buttons-area">

                <ActionButton buttonStyle="clear" text="clear" />

                <div className="number-buttons-area">
                    <NumberButton buttonStyle="number-button" text="7" />
                    <NumberButton buttonStyle="number-button" text="8" />
                    <NumberButton buttonStyle="number-button" text="8" />
                    <NumberButton buttonStyle="number-button" text="4" />
                    <NumberButton buttonStyle="number-button" text="5" />
                    <NumberButton buttonStyle="number-button" text="6" />
                    <NumberButton buttonStyle="number-button" text="1" />
                    <NumberButton buttonStyle="number-button" text="2" />
                    <NumberButton buttonStyle="number-button" text="3" />
                </div>

                <ActionButton buttonStyle="zero" text="0" />
            </div>

            <div className="operator-buttons">
                <NumberButton buttonStyle="operator-button" text="÷" />
                <NumberButton buttonStyle="operator-button" text="×" />
                <NumberButton buttonStyle="operator-button" text="-" />
                <NumberButton buttonStyle="operator-button" text="+" />
                <NumberButton buttonStyle="operator-button" text="=" />
            </div>
        </div>
    )
}

export default ButtonContainer;