import React from 'react';
import './Button.css';

const NumberButton = ({value=0}) => {
    return (
        <div className={`button number-button ${(value === 0) ? 'wide-button' : ''}`}>
            {value}
        </div>
    );
}

export default NumberButton;