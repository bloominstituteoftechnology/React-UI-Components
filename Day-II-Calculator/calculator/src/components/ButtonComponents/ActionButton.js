import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={props.actionstyle}>{props.text}</button>; 

}

export default ActionButton
