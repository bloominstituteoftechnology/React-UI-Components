import React from 'react';
import './Button.css';

const ActionButton = (props) => {

    return (
        <div className={props.displayStyle}>
            <div className="actionButtons">{props.text.actionArray[0]}</div>
            <div className="actionButtons">{props.text.actionArray[1]}</div>
            <div className="actionButtons">{props.text.actionArray[2]}</div>
            <div className="actionButtons">{props.text.actionArray[3]}</div>
            <div className="actionButtons">{props.text.actionArray[4]}</div>
        </div>
    );
};

export default ActionButton;