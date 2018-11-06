import React from 'react';
import './NumberContainer.css';
import ActionButton from './ActionButton.js';
import NumberButton from './NumberButton.js';

const buttons = [
    {
        text:'7',
        style:'number-button'
    },
    {
        text:'8',
        style:'number-button'
    },
    {
        text:'9',
        style:'number-button'
    },
    {
        text:'4',
        style:'number-button'
    },
    {
        text:'5',
        style:'number-button'
    },
    {
        text:'6',
        style:'number-button'
    },
    {
        text:'1',
        style:'number-button'
    },
    {
        text:'2',
        style:'number-button'
    },
    {
        text:'3',
        style:'number-button'
    }    
];

const zero = {
    text: '0',
    style: 'action-button'
};

const clear = {
    text: 'clear',
    style: 'action-button'
};

function NumberContainer(){
    return(
        <div className='number-container'>
            <ActionButton actionButton={clear}/>
            {buttons.map(button => <NumberButton button={button} />)}
            <ActionButton actionButton={zero} />
        </div>
    );
}

export default NumberContainer;