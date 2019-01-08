import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={props.customClass}>{props.action}</button>
}

export default ActionButton;