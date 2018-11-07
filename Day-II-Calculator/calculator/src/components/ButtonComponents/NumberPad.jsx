import React from 'react';
import NumberButton from './NumberButton.js';
import ActionButton from './ActionButton';
const numbers = Array.from(Array(9).keys()).reverse();
console.log(numbers);

const NumberPad = () => {
    return (
        <div className="left-buttons">
            <ActionButton text="clear" />
            <div className="number-pad">
                {numbers.map((number, index) => (
                    <NumberButton buttonStyle="number-button" text={number + 1} />
                ))}
            </div>
            <ActionButton text="0" />
        </div>
    );
};

export default NumberPad;
