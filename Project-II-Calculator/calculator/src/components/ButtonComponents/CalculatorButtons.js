import React from 'react';
import './Button.css';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton'

const CalculatorButtons = () => {
    return (
        <div className="calculatorButtons">
            <div className="whiteButtons">

                <ActionButton buttonStyle="three-Fourth-Btn" text="clear" id="clearBtn"/>

                <div className="numbers">
                    <NumberButton buttonStyle="number" text="1"/>
                    <NumberButton buttonStyle="number" text="2"/>
                    <NumberButton buttonStyle="number" text="3"/>
                    <NumberButton buttonStyle="number" text="4"/>
                    <NumberButton buttonStyle="number" text="5"/>
                    <NumberButton buttonStyle="number" text="6"/>
                    <NumberButton buttonStyle="number" text="7"/>
                    <NumberButton buttonStyle="number" text="8"/>
                    <NumberButton buttonStyle="number" text="9"/>
                </div>

                <ActionButton buttonStyle="three-Fourth-Btn" text="0" id="zeroNum"/>

            </div>

            <div className="operators">
                <NumberButton buttonStyle="operatorBtn" text="&divide;"/>
                <NumberButton buttonStyle="operatorBtn" text="&times;"/>
                <NumberButton buttonStyle="operatorBtn" text="&minus;"/>
                <NumberButton buttonStyle="operatorBtn" text="+"/>
                <NumberButton buttonStyle="operatorBtn" text="="/>
            </div>
        </div>
    );
};

export default CalculatorButtons;