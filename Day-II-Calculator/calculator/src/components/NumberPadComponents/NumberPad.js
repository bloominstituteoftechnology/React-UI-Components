import React from 'react';
import './NumberPad.css';
import ActionButton from '../ButtonComponents/ActionButton.js';
import NumberButton from '../ButtonComponents/NumberButton.js';



const NumberPad = () => {
    return (
    <div className="number-pad">
        {/* Row One */}
        <ActionButton buttonStyle="clear action" text="clear" /> 
        <NumberButton buttonStyle="symbol button" text="÷" />

        {/* Row Two */}
        <NumberButton buttonStyle="number button" text="7" /> 
        <NumberButton buttonStyle="number button" text="8" /> 
        <NumberButton buttonStyle="number button" text="9" /> 
        <NumberButton buttonStyle="symbol button" text="X" /> 

        {/* Row Three */}
        <NumberButton buttonStyle="number button" text="4" /> 
        <NumberButton buttonStyle="number button" text="5" /> 
        <NumberButton buttonStyle="number button" text="6" /> 
        <NumberButton buttonStyle="symbol button" text="-" /> 

        {/* Row Four */}
        <NumberButton buttonStyle="number button" text="1" /> 
        <NumberButton buttonStyle="number button" text="2" /> 
        <NumberButton buttonStyle="number button" text="3" /> 
        <NumberButton buttonStyle="symbol button" text="+" /> 

        {/* Row Five */}
        <ActionButton buttonStyle="zero action" text="0" /> 
        <NumberButton buttonStyle="symbol button" text="=" /> 
    </div>
    );
}

export default NumberPad;