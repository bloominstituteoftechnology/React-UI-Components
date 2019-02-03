import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return(
        <React.Fragment>
            <div className='display'><h1>0</h1></div>
            <div className='buttons'>
                <div className='left-buttons'>
                    <ActionButton styles='button big' type='clear'/>
                    <NumberButton styles='button' type='7'/>
                    <NumberButton styles='button' type='8'/>
                    <NumberButton styles='button' type='9'/>
                    <NumberButton styles='button' type='4'/>
                    <NumberButton styles='button' type='5'/>
                    <NumberButton styles='button' type='6'/>
                    <NumberButton styles='button' type='1'/>
                    <NumberButton styles='button' type='2'/>
                    <NumberButton styles='button' type='3'/>
                    <NumberButton styles='button big' type='0'/>
                </div>
                <div className='right-buttons'>
                    <ActionButton styles='button small red' type='÷'/>
                    <ActionButton styles='button small red' type='X'/>
                    <ActionButton styles='button small red' type='-'/>
                    <ActionButton styles='button small red' type='+'/>
                    <ActionButton styles='button small red' type='='/>
                </div>

            </div>

        </React.Fragment>
    );
}

export default CalculatorDisplay;