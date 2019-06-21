import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button onClick={props.handleClick} className={props.bgcolor}>
            {props.name}
        </button>
    );
}

export default ActionButton;