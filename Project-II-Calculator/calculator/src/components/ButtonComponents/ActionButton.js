import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <div className={props.buttonStyle ? props.buttonStyle : "action-default"}
                onClick={() => props.handleAction(props.action)}>{props.text}</div>;
};

export default ActionButton;
