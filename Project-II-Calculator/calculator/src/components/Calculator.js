import React from 'react';
import CalculatorDisplay from './DisplayComponents/CalculatorDisplay';
import NumberButton from './ButtonComponents/NumberButton'
import ActionButton from './ButtonComponents/ActionButton';
;
const Calculator = () => {

    return(
        <div className="Calculator">
            <CalculatorDisplay value={0}/>
            <ActionButton text="clear" buttonStyle="ActionButton" />
            <NumberButton text="÷" buttonStyle="NumberButtonRed" />
            <NumberButton text="7" buttonStyle="NumberButton" />
            <NumberButton text="8" buttonStyle="NumberButton" />
            <NumberButton text="9" buttonStyle="NumberButton" />
            <NumberButton text="X" buttonStyle="NumberButtonRed" />
            <NumberButton text="4" buttonStyle="NumberButton" />
            <NumberButton text="5" buttonStyle="NumberButton" />
            <NumberButton text="6" buttonStyle="NumberButton" />
            <NumberButton text="-" buttonStyle="NumberButtonRed" />
            <NumberButton text="1" buttonStyle="NumberButton" />
            <NumberButton text="2" buttonStyle="NumberButton" />
            <NumberButton text="3" buttonStyle="NumberButton" />
            <NumberButton text="+" buttonStyle="NumberButtonRed" />
            <ActionButton text="0" buttonStyle="ActionButton" />
            <NumberButton text="=" buttonStyle="NumberButtonRed" />
        </div>
    )
}

export default Calculator;