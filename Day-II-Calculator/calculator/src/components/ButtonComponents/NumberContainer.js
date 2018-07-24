import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberContainer = () => {
    return (
        <div className="number-container">
            {/* This is the numbers container */}
            <NumberButton text="7"/>
            <NumberButton text="8"/>
            <NumberButton text="9"/>
            <NumberButton text="×"/>
            <NumberButton text="4"/>
            <NumberButton text="5"/>
            <NumberButton text="6"/>
            <NumberButton text="—"/>
            <NumberButton text="1"/>
            <NumberButton text="2"/>
            <NumberButton text="3"/>
            <NumberButton text="+"/>
        </div>
    );
};

export default NumberContainer;