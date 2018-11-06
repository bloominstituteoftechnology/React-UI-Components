import React from 'react';
import './OperatorContainer.css';
import OperatorButton from './OperatorButton';

const buttons = [
    {
        text:'/',
        style:'operator-button'
    },
    {
        text:'*',
        style:'operator-button'
    },
    {
        text:'+',
        style:'operator-button'
    },
    {
        text:'-',
        style:'operator-button'
    },
    {
        text:'=',
        style:'operator-button'
    },
];
function OperatorContainer(){
    return(
        <div className='operator-container'>
            {buttons.map(button => <OperatorButton button={button} />)}
        </div>
    );
}

export default OperatorContainer;