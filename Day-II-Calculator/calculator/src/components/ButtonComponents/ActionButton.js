import React from 'react';
import './Button.css';

function ActionButton(props){
    return (
        <div className={props.displayType}> {props.type} </div>
    );
}

export default ActionButton;