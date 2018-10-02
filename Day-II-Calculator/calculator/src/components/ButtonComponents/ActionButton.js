import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || === "=";
}
const ActionButton = (props) => {
    return (
        <button className={`props.buttonStyle ${isOperator(props.children) ? null : "operator"}`}>{props.text}{props.children}</button>
    )
}

export default ActionButton;