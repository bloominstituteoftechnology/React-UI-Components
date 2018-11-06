import React from 'react';
import './Button.css';

function NumberButton(prop){
    return <div className='number-button'>{prop.number}</div>
}

export default NumberButton;