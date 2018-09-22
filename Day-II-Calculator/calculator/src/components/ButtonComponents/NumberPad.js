import React from 'react';
import Button from './Button.css';
import ClearButton from './ClearButton';
import NumberButton from './NumberButton';
import ZeroButton from './ZeroButton';

const NumberPad = () => {
    return(
        <div className="numberPad">
            <ClearButton />
            <NumberButton />
            <ZeroButton />
        </div>
    );
};

export default NumberPad;