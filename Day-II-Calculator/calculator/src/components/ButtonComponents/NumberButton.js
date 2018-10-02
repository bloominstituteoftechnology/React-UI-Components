import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return (
        <div className={props.buttonStyle}>
        {props.displaySymbol}
        </div>
    );
}

export default NumberButton;

