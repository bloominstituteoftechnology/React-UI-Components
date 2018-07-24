import React from 'react';
import './Button.css';

export const ActionButton = (props) =>{
    return (<div className={props.buttonStyle}><span className="buttonText">{props.buttonContent}</span></div>);
}

export default ActionButton;