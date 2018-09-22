import React from 'react';
import './Keypad.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/NumberButton';

const Keypad = () => {
    return (
        <div className = 'calculatorgrid'>
        <div className = 'row1'><ActionButton /><ActionButton /></div>
        <div className = 'row2'><NumberButton /><NumberButton /><NumberButton /><NumberButton /></div>
        <div className = 'row3'><NumberButton /><NumberButton /><NumberButton /><NumberButton /></div>
        <div className = 'row4'><NumberButton /><NumberButton /><NumberButton /><NumberButton /></div>
        <div className = 'row5'><ActionButton /><ActionButton /></div>
        
        
        </div>
    )
}


export default Keypad;