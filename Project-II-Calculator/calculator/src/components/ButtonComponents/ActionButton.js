import React from 'react';
import './Button.css';
// import { tsPropertySignature } from '@babel/types';

const ActionButton = (props) => {
    return (
        <button className="action">{props.text}</button>
    )
}

export default ActionButton;