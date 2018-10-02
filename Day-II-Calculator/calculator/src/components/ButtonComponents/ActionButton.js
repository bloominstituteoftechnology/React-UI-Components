import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (   
        <div className='action'>
            <div className='divide'>
                <h1>/</h1>
            </div>
            <div className='multiply'>
                <h1>X</h1>
            </div>
            <div className='subtract'>
                <h1>-</h1>
            </div>
            <div className='add'>
                <h1>+</h1>
            </div>
            <div className='equals'>
                <h1>=</h1>
            </div>
        </div>
       );
}
 
export default ActionButton;
