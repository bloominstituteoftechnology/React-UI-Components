import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberContainer = () => {
    return (
        <div className="number-container">
            This is the numbers container
            <NumberButton text="1"/>
            <NumberButton text="2"/>
            <NumberButton text="3"/>
        </div>
    );
};

export default NumberContainer;