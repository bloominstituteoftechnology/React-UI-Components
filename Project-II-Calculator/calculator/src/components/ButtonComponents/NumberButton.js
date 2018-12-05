import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div>
            <button className={`squareButtonStyle ${props.lengthStyle}`} >{props.text}</button>     
        </div>
    )
}

export default NumberButton;
