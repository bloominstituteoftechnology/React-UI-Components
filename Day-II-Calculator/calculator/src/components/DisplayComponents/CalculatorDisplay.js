import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';


const CalculatorDisplay = () => {
    return (
        <div>
        <div className='flex'>
             <ActionButton buttonStyle={'action'} text={'clear'} />
             <NumberButton buttonStyle={'number symbol operator'} text={'÷'} />
             </div>
        <div className='flex'>
        <NumberButton buttonStyle={'number bold'} text={'7'} />
        <NumberButton buttonStyle={'number bold'} text={'8'} />
        <NumberButton buttonStyle={'number bold'} text={'9'} />
        <NumberButton buttonStyle={'number symbol'} text={'x'} />
    </div>
    <div className='flex'>
        <NumberButton buttonStyle={'number bold'} text={'4'} />
        <NumberButton buttonStyle={'number bold'} text={'5'} />
        <NumberButton buttonStyle={'number bold'} text={'6'} />
        <NumberButton buttonStyle={'number symbol'} text={'-'} />
    </div>
    <div className='flex'>
        <NumberButton buttonStyle={'number bold'} text={'1'} />
        <NumberButton buttonStyle={'number bold'} text={'2'} />
        <NumberButton buttonStyle={'number bold'} text={'3'} />
        <NumberButton buttonStyle={'number symbol'} text={'+'} />
    </div>
        <div className='flex'>
        <ActionButton buttonStyle={'action bold'} text={'0'} />
        <NumberButton buttonStyle={'number symbol operator'} text={'='} />
    
    </div>
    </div>
    )
}

export default CalculatorDisplay;