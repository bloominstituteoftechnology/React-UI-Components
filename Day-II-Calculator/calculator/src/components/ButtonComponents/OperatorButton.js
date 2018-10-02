import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
    return(
        <button classNAme = {props.buttonStyle}>
        {props.text}
        </button>
    )
    
};

export default OperatorButton;