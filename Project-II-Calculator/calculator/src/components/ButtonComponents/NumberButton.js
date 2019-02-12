import React from 'react';
import './Button.css';



const NumberButton = props => {
    return (
        <button className={props.button.buttonStyle}>{props.button.text}</button>
    );
};


export default NumberButton;