import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import LongNumberButton from './LongNumberButton';

const NumberButtonContainer = () => {
    return (
      <div>
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <LongNumberButton text="0"/>
      </div>
    );
};

export default NumberButtonContainer;