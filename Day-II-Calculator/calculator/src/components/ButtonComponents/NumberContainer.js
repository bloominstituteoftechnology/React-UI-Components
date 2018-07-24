import React from 'react';
import './Button.css';
import NumberButton from './NumberButton.js';


const NumberContainer = () => {
    return (
        <div className = "number-container">
        <NumberButton text = "1" />
        <NumberButton text = "2" />
        <NumberButton text = "3" />
        <NumberButton text = "4" />
        <NumberButton text = "5" />
        <NumberButton text = "6" />
        <NumberButton text = "7" />
        <NumberButton text = "8" />
        <NumberButton text = "9" />
        </div>
    );
};

export default NumberContainer;