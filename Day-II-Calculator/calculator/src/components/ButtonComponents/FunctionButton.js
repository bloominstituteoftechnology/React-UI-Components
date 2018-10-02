import React from 'react';
import './Button.css';


const FunctionButton = props => {
    return (
        <div>
            <button className={props.buttonStyle}>Mathematical functions{props.text}</button>
        </div>
    );
};

export default FunctionButton;