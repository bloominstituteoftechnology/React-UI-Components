import React from 'react';
import './Button.css';


const ActionButtons = (props) => {
    return (
        <div className="ActionContainer">
            <p className={` ${props.buttonColor}`} >{props.text}</p>
        </div>
    );
}

export default ActionButtons;