import React from 'react';
import './Button.css';


function OperatorButton(props) {
    return (
    <div className="button-component">
        <button className={props.style}>{props.text}</button>
    </div>
    );
}

export default OperatorButton;