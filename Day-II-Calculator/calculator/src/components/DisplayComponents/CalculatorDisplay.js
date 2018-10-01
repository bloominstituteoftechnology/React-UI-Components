import React from 'react';
import './Display.css';


import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return (
        <div className='calcContainer'>
            <div className='outputDisplay'>
                <h1 class='output'>0</h1>
            </div>
            <div className='buttonContainer'>
                <ActionButton btnStyle=' largeWhite' input='clear' />
                <ActionButton btnStyle='  operator' input='÷' />
            </div>
            <div className='buttonContainer'>
                <NumberButton btnStyle='  numButton' text='7' />
                <NumberButton btnStyle='  numButton' text='8' />
                <NumberButton btnStyle='  numButton' text='9' />
                <ActionButton btnStyle='  operator' input='x' />
            </div>
            <div className='buttonContainer'>
                <NumberButton btnStyle='  numButton' text='4' />
                <NumberButton btnStyle='  numButton' text='5' />
                <NumberButton btnStyle='  numButton' text='6' />
                <ActionButton btnStyle='  operator' input='-' />
            </div>
            <div className='buttonContainer'>
                <NumberButton btnStyle='  numButton' text='1' />
                <NumberButton btnStyle='  numButton' text='2' />
                <NumberButton btnStyle='  numButton' text='3' />
                <ActionButton btnStyle=' operator' input='+' />
            </div>
            <div className='buttonContainer'>
                <NumberButton btnStyle='largeWhite numButton' text='0' />
                <ActionButton btnStyle='  operator' input='=' />
            </div>
        </div>
    )
}
export default CalculatorDisplay;