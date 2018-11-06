import React from 'react';
import './Button.css';
import CalcButton from './CalcButton.js';

function ButtonContainer() {
    return (
        <div className="button-container">
            <CalcButton buttonStyle='long-btn' text='clear' />
            <CalcButton buttonStyle='operator-btn' text='÷' />
            <CalcButton buttonStyle='number-btn' text='7' />
            <CalcButton buttonStyle='number-btn' text='8' />
            <CalcButton buttonStyle='number-btn' text='9' />
            <CalcButton buttonStyle='operator-btn' text='×' />
            <CalcButton buttonStyle='number-btn' text='4' />
            <CalcButton buttonStyle='number-btn' text='5' />
            <CalcButton buttonStyle='number-btn' text='6' />
            <CalcButton buttonStyle='operator-btn' text='-' />
            <CalcButton buttonStyle='number-btn' text='1' />
            <CalcButton buttonStyle='number-btn' text='2' />
            <CalcButton buttonStyle='number-btn' text='3' />
            <CalcButton buttonStyle='operator-btn' text='+' />
            <CalcButton buttonStyle='long-btn' text='0' />
            <CalcButton buttonStyle='operator-btn' text='=' />
        </div>
    )
}

export default ButtonContainer;
