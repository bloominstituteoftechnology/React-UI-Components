import React from 'react';
import './Button.css';
import ClearButton from './ClearButton';
import NumberButton from './NumberButton';
import ZeroButton from './ZeroButton';

const Keypad = () => {
    return (
        <div className="keypad">
            <ClearButton />
            <NumberButton />
            <ZeroButton />
        </div>
    )
};

export default Keypad;