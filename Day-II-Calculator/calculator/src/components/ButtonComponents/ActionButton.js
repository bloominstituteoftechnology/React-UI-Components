import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return (<div className = 'ActButtons'>
        <h1> {props.text}</h1>
        </div>)
}

export default ActionButton;