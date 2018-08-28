import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'

const CalculatorDisplay = () => {
  return (
    <div className='container'>
    <div className='black'>0</div>

    <div className='number-button'>

        <div className='top-bottom'>
            <ActionButton text='clear' buttonStyle='white-action'/>

            <NumberButton text='%' buttonStyle='red'/>
        </div>

            <div className='number-wrap'>
                <NumberButton text='7' buttonStyle='white'/>
                <NumberButton text='8' buttonStyle='white'/>
                <NumberButton text='9' buttonStyle='white'/>
                <NumberButton text='x' buttonStyle='red x'/>
            </div>

            <div className='number-wrap'>
                <NumberButton text='4' buttonStyle='white'/>
                <NumberButton text='5' buttonStyle='white'/>
                <NumberButton text='6' buttonStyle='white'/>
                <NumberButton text='-' buttonStyle='red minus'/>
            </div>

            <div className='number-wrap'>
                <NumberButton text='3' buttonStyle='white'/>
                <NumberButton text='2' buttonStyle='white'/>
                <NumberButton text='1' buttonStyle='white'/>
                <NumberButton text='+' buttonStyle='red plus'/>            
            </div>

        <div className='top-bottom'>
            <ActionButton text='0' buttonStyle='white-action'/>
            
            <NumberButton text='=' buttonStyle='red equal'/>
        </div>

    </div>
    </div>
  );
};

export default CalculatorDisplay;