import React from 'react';
import './Button.css';


function NumberButton () {
    return (
        <div className='number-pad'>
            <div className='number-button'>1</div>
            <div className='number-button'>2</div>
            <div className='number-button'>3</div>
            <div className='number-button'>4</div>
            <div className='number-button'>5</div>
            <div className='number-button'>6</div>
            <div className='number-button'>7</div>
            <div className='number-button'>8</div>
            <div className='number-button'>9</div>
            <div className='number-button' id='zero'>0</div>
        </div>
    );
};

export default NumberButton;