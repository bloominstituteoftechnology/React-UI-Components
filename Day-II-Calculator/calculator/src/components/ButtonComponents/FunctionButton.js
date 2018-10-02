import React from 'react';
import './Button.css';


const FunctionButton = props => {
    return (
        <div>
            <button className={props.buttonStyle}>{props.function.function}</button>
        </div>
    );
};

export default FunctionButton;