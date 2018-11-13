import React from 'react';
import './Button.css';

const text = '';
const buttonStyle = true;


const NumberButton = (props) => {
    return (
        <div className='number-button'>
        <button className={props.buttonStyle}>{props.text}</button>
        <h1>Number Buttons go here</h1>
        </div>
    );
}

export default NumberButton;