import React from 'react';
import './Button.css';

//This will contain the props fro 0-9

const NumberButton = (props) => {
    return(
        <div className='left-buttons'>
            <button className='number-button'>{props.number}</button>
        </div>
    );
}

export default NumberButton;