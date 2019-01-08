import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val);
}


export const Button = props => 
    <div className={`wrapper ${
        isOperator(props.children) ? null : "operator"
        }`} 
        onClick={()=> props.handleClick(props.children)}
    >{props.children}
    </div>;


