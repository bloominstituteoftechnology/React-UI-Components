import React from 'react';
import './NumberContainer.css';
import ActionButton from './ActionButton.js';
import NumberButton from './NumberButton.js';

function NumberContainer(){
    return(
        <div className='number-container'>
            <ActionButton number= 'clear'/>
            <NumberButton number= '1' />
            <NumberButton number= '2' />
            <NumberButton number= '3' />
            <NumberButton number= '4' />
            <NumberButton number= '5' />
            <NumberButton number= '6' />
            <NumberButton number= '7' />
            <NumberButton number= '8' />
            <NumberButton number= '9' />
            <ActionButton number= '0' />
        </div>
    );
}

export default NumberContainer;