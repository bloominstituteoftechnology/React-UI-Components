import React from 'react';
import Button from './Button'
import './Button.scss';

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
        <div className="symbols">
            {actions.map( button =>{
                return <Button item = {button} key={button.id} />
            })
         }
        </div>       
    );
}

export default ActionButton 