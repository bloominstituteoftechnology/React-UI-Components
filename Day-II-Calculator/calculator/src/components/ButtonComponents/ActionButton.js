import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        
        <button className={props.style}>{props.text}</button>
        
        // <div className="actionButton">
        //     <p>{props.text}</p>
        // </div>
    );
};

export default ActionButton;