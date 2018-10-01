import React from 'react';
import './Button.css';

const ActionButton = (props) => {

    return (
    <h1 className={props.className}> {props.sym} </h1>
    );
}

export default ActionButton;