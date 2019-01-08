import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <button className={props.buttonStyle} onClick={(e) => {props.addEvaluate(e, props.mathSymbol)}}>{props.text}</button>
}

export default ActionButton