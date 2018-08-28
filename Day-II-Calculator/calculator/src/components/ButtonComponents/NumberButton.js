import React from 'react';
import './Button.css';

const NumberButton = (props)=> {
    return (
        <div className='numbers'>
        <div className='numberrow'>
            <h2 className='number'>7</h2>
            <h2 className='number'>8</h2>
            <h2 className='number'>9</h2>          
        </div>
        <div className='numberrow2'>
        <div className='numberrow'>
            <h2 className='number'>4</h2>
            <h2 className='number'>5</h2>
            <h2 className='number'>6</h2>          
        </div>
        </div>
        <div className='numberrow3'>
        <div className='numberrow'>
            <h2 className='number'>1</h2>
            <h2 className='number'>2</h2>
            <h2 className='number'>3</h2>          
        </div>
        </div>
    </div>
    );
}

export default NumberButton;