import React from 'react';
import './Button.css';
import ClearButton from './ClearButton';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const Keypad = () => {
    return (
        <div className="keypad">
            <ClearButton />
            <ActionButton />
            <NumberButton />
        </div>
    )
};

export default Keypad;