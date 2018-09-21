import React from 'react';
import './Button.css';

//this is a re-usable component to be passed into App.js
const NumberButton = (props) => {
    return (
        //className = props.buttonStyle which is named 'number', so in Button.css will be '.number'
        <button className={props.buttonStyle}> {props.text} </button>   
    )
}

export default NumberButton;