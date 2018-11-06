import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const numbersArr = [
    {
        symbol: 'clear',
        class: 'clear-btn' 
    },
    {
        symbol: '7',
        class: 'number-btn' 
    },
    {
        symbol: '8',
        class: 'number-btn' 
    },
    {
        symbol: '9',
        class: 'number-btn' 
    },
    {
        symbol: '4',
        class: 'number-btn' 
    },
    {
        symbol: '5',
        class: 'number-btn' 
    },
    {
        symbol: '6',
        class: 'number-btn' 
    },
    {
        symbol: '1',
        class: 'number-btn' 
    },
    {
        symbol: '2',
        class: 'number-btn' 
    },
    {
        symbol: '3',
        class: 'number-btn' 
    },
    {
        symbol: '0',
        class: 'wide-btn' 
    }
]

function NumbersContainer(props) {
    return (
        <div className='numbers-container'>
            {numbersArr.map(button => <NumberButton buttonProp={button} />)}
        </div>
    )
}

export default NumbersContainer;