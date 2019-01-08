import React from 'react';
import Button from './Button'
import './Button.css';

const actions = [
    {
        id: '1',
        name: '÷',
        style: 'action'
    },
    {
        id: '2',
        name: 'x',
        style: 'action'
    },
    {
        id: '3',
        name: '-',
        style: 'action'
    },
    {
        id: '4',
        name: '+',
        style: 'action'
    },
    {
        id: '5',
        name: '=',
        style: 'action'
    }
]

function ActionButton(){
    return(
        <div className="numbers">
            {actions.map( button => < Button item = {button} key={button.id} />)}
        </div>       
    );
}

export default ActionButton