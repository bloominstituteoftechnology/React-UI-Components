import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className={`large-button ${props.className}`}>
        {props.input}
        </button>
    )

}


export default ActionButton;




