import React from 'react';
import './Button.css';


function ActionButton(props){
    return (
        <button className = {props.displayStyle}>{props.action}</button>
    );
};

export default ActionButton;