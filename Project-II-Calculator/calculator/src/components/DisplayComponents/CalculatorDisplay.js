import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return(
        <div className='container'>
            <div className='top-display'>
                0
            </div>
            <div className='bottom-display'>
                <div className='right'>
                    <ActionButton type='÷'/>
                    <ActionButton type='X'/>
                    <ActionButton type='-'/>
                    <ActionButton type='+'/>
                    <ActionButton type='='/>
                </div>
                <div className='left'>
                    <NumberButton number="Clear"/>
                    <NumberButton number="1"/>
                    <NumberButton number="2"/>
                    <NumberButton number="3"/>
                    <NumberButton number="4"/>
                    <NumberButton number="5"/>
                    <NumberButton number="6"/>
                    <NumberButton number="7"/>
                    <NumberButton number="8"/>
                    <NumberButton number="9"/>
                    <NumberButton number="0"/>
                </div>
                

            </div>

        </div>

    );
}

export default CalculatorDisplay;