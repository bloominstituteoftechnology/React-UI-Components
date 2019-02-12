import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <button className = {props.style}>
            {props.text}
        </button>
    ); //semicolon
};  // semicolon


export default ActionButton; //ties to the import statement