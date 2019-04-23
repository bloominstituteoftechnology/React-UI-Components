import React from 'react';
import './Button.scss';


const ActionButton = (props) => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
}

export default ActionButton;