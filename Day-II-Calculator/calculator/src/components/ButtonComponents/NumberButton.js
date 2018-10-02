import React from 'react';
import './Button.css';



const NumberButton = props => {
    return (
        <div className={`numberButtonDiv ${props.style}`}>
        <button className={`defaultButtonStyles ${props.style}`}>{props.text}</button>
        </div>
    );
}

export default NumberButton;