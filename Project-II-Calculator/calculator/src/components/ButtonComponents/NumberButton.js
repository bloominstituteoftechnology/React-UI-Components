import React from 'react';
import Button from './Button'
import './Button.scss';

const buttons = [
    {
        id: '0',
        name: '0',
        style: 'triple'
    },
    {
        id: '1',
        name: '1',
        style: 'number'
    },
    {
        id: '2',
        name: '2',
        style: 'number'
    },
    {
        id: '3',
        name: '3',
        style: 'number'
    },
    {
        id: '4',
        name: '4',
        style: 'number'
    },
    {
        id: '5',
        name: '5',
        style: 'number'
    },
    {
        id: '6',
        name: '6',
        style: 'number'
    },
    {
        id: '7',
        name: '7',
        style: 'number'
    },
    {
        id: '8',
        name: '8',
        style: 'number'
    },
    {
        id: '9',
        name: '9',
        style: 'number'
    },
    {
        id: '10',
        name: 'clear',
        style: 'triple'
    }
]

function NumberButton(){
    return(
        <div className="numbers">
            {buttons.map( button => < Button item = {button} key={button.id} />)}
        </div>       
    );
}


export default NumberButton; 