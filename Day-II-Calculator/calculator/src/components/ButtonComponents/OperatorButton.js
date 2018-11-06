import React from 'react';
import './Button.css';

function OperatorButton(props){
    return <div className={props.button.style}>{props.button.text}</div>
};

export default OperatorButton;