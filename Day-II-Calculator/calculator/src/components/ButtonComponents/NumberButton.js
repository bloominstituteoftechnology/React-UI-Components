import React from 'react';
import './Button.css';


const NumberButton = (props) => {

    return (
    
    <h1 className={props.className}> {props.num} </h1>
    );
}

export default NumberButton;