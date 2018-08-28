import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return (
        <div className= {props.buttonStyle}>
            <div> {props.NumberButton.text} </div>
        </div>
    );
}

export default NumberButton;
