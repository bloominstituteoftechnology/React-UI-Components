import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

function CalculatorDisplay(){   

    return (
        <div className='calc-display-content'>
            <NumberButton buttonStyle={'displayBtn'} text={'0'} />
            <ActionButton  buttonStyle={'actionBtn'} text={'clear'}/> 
            <NumberButton buttonStyle={'buttonSigns'} text={'/'} />
            <NumberButton buttonStyle={'buttonNums'} text={'7'} />
            <NumberButton buttonStyle={'buttonNums'} text={'8'} />
            <NumberButton buttonStyle={'buttonNums'} text={'9'} />
            <NumberButton buttonStyle={'buttonSigns'} text={'x'} />
            <NumberButton buttonStyle={'buttonNums'} text={'4'} />
            <NumberButton buttonStyle={'buttonNums'} text={'5'} />
            <NumberButton buttonStyle={'buttonNums'} text={'6'} />
            <NumberButton buttonStyle={'buttonSigns'} text={'-'} />
            <NumberButton buttonStyle={'buttonNums'} text={'1'} />
            <NumberButton buttonStyle={'buttonNums'} text={'2'} />
            <NumberButton buttonStyle={'buttonNums'} text={'3'} />
            <NumberButton buttonStyle={'buttonSigns'} text={'+'} />
            <ActionButton  buttonStyle={'actionBtn'} text={'0'}/>
            <NumberButton buttonStyle={'buttonSigns'} text={'='} />
        </div>
    );
}

export default CalculatorDisplay;