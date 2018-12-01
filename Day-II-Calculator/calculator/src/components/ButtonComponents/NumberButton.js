import React from 'react';
import './Button.css';

const NumberButton = (props)=>{
    return(
        <button className={`btn-default ${props.buttonStyle}`} >
            <p>{props.text}</p>
        </button>
    );
};

export default NumberButton;