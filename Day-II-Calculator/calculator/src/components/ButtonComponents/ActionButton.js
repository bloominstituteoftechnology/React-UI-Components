import React from 'react';
import './Button.css';

const RedButton = props => <button className={props.buttonStyle}>{props.text}</button>

const ActionButton = props => {
    return (
        <div className="right-side">
            <RedButton buttonStyle="action" text="÷"/>
            <RedButton buttonStyle="action" text="×"/>
            <RedButton buttonStyle="action" text="-"/>
            <RedButton buttonStyle="action" text="+"/>
            <RedButton buttonStyle="action" text="="/>
        </div>
    )
}

export default ActionButton;