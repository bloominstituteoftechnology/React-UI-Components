import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div>
            <button className={`buttonStyle ${props.functionality}`} >{props.text}</button>     
        </div>
    )
}

export default NumberButton;
