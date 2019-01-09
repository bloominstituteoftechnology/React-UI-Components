import React from 'react';
import './Button.css';

const OperationButton = (props) => {
    return (
        <button className = {props.buttonStyle}>
            <span> {props.value} </span>
        </button>
    );
}

export default OperationButton;