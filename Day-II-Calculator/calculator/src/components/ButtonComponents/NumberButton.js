import React from 'react';
import './Button.css';
import WideButtons from './WideButton';
import SquareButtons from './SquareButton';

const NumberButtons = () => {
    return (
        <div className='numberContainer'>
            <WideButtons />
            <div className= 'numbers'></div>
            <div className= 'numbers'></div>
            <div className= 'numbers'></div>
            <WideButtons />
        </div>
    )
}