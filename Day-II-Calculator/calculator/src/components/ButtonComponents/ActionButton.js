import React from 'react';
import './Button.css';


function ActionButton () {
    return (
        <div className='actions'>
            <div className='operators'>÷</div>
            <div className='operators'>×</div>
            <div className='operators'>–</div>
            <div className='operators'>+</div>
            <div className='operators'>=</div>
        </div>
    );
}

export default ActionButton;