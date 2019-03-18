import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return <div className={props.buttonStyle ? props.buttonStyle : "number-default"}
                onClick={() => props.handleNumber(props.number)}>{props.number}</div>;
};

export default NumberButton;
