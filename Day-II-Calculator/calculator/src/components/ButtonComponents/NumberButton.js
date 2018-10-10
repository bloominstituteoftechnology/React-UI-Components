import React from 'react';
import './Button.css';

const NumberButton = (prop) => {
    return (
        <button className={prop.buttonStyle}>{prop.buttonText}</button>
    )
}

export default NumberButton;