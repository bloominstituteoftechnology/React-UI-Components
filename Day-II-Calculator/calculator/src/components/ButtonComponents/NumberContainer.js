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
            <NumberButton buttonStyle="red-button" text="×"/>
            <NumberButton text="4"/>
            <NumberButton text="5"/>
            <NumberButton buttonStyle="custom-bbutton" text="6"/>
            <NumberButton buttonStyle="red-button" text="—"/>
            <NumberButton text="1"/>
            <NumberButton text="2"/>
            <NumberButton text="3"/>
            <NumberButton buttonStyle="red-button" text="+"/>
        </div>
    );
};

export default NumberContainer;