import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonContainer = () => {
    return (
        <div className='button-container'>
            <ActionButton text='clear'/>
            <NumberButton buttonStyle='red-button-style' text='÷'/>
            <NumberButton text='7'/>
            <NumberButton text='8'/>
            <NumberButton text='9'/>
            <NumberButton buttonStyle='red-button-style' text='×'/>
            <NumberButton text='4'/>
            <NumberButton text='5'/>
            <NumberButton text='6'/>
            <NumberButton buttonStyle='red-button-style' text='-'/>
            <NumberButton text='1'/>
            <NumberButton text='2'/>
            <NumberButton text='3'/>
            <NumberButton buttonStyle='red-button-style' text='+'/>
            <ActionButton text='0'/>
            <NumberButton buttonStyle='red-button-style' text='='/>
        </div>
    );
}

export default ButtonContainer;