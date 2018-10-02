import React from 'react';
import './Button.css';

const ClearButton = (props) => {
    return(
        <button classNAme = {props.buttonStyle}>
        {props.text}
        </button>
    )
    
};

export default ClearButton;