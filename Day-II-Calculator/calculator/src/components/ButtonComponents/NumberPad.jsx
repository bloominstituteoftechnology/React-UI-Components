import React from 'react';
import './Button.css';
import NumberButton from './NumberButton.js';
const numbers = Array.from(Array(9).keys());
console.log(numbers);

const NumberPad = () => {
    return (
        <div className="number-pad">
            {numbers.map((number, index) => (
                <NumberButton buttonStyle="number-button" text={index + 1} />
            ))}
        </div>
    );
};

export default NumberPad;
