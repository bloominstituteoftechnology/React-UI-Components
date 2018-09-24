import React from 'react';
import './Button.css';


const NumberButton = (props) => {

    return (
        <div className="numBtn">
        <div className={props.buttonStyle}>{props.text}</div>
        </div>
    );
}


export default NumberButton;