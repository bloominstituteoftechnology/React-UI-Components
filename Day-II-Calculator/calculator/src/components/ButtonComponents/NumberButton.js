import React from 'react';
import './Button.css';


function NumberButton(props){
    return (
        <button className = {props.displayStyle}>{props.number}</button>
    );
};

export default NumberButton;