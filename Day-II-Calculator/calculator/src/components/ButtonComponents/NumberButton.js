import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className="button" className={props.buttonStyle}>
            {props.text}
        </div>
    );
};

export default NumberButton;