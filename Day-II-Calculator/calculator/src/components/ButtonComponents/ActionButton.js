import React from 'react';
import './Button.css';

function ActionButton (props) {
        if (props.text === "zero"){
            return (
                <button className="actionButtonClass">0</button>
            );
        }
        return (
                <button className="actionButtonClass">{props.text}</button>
        );
    // if (props.text === "zero"){
    //     return (

    //     );
    // }
    // if (props.text === "clear"){
    //     return
    // }
}

export default ActionButton;