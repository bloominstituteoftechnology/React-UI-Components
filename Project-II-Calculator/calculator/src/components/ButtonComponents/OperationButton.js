import React from 'react';
import './Button.css';

const OperationButton = props => {
    return (
        <button className = 'operationButton'> {props.text} </button>
    );
}

export default OperationButton;