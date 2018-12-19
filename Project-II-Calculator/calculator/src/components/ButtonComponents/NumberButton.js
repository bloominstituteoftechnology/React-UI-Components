import React from 'react';
import './Button.css';

function NumberButton(props){
    return(
        <div className='number-button'>
            <h1>{props.number}</h1>
        </div>
        
    )
}

export default NumberButton;
