import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div>
            <div className="numbers">{props.number.numArray[1]}</div>
            <div className="numbers">{props.number.numArray[2]}</div>
            <div className="numbers">{props.number.numArray[3]}</div>
            <div className="numbers">{props.number.numArray[4]}</div>
            <div className="numbers">{props.number.numArray[5]}</div>
            <div className="numbers">{props.number.numArray[6]}</div>
            <div className="numbers">{props.number.numArray[7]}</div>
            <div className="numbers">{props.number.numArray[8]}</div>
            <div className="numbers">{props.number.numArray[9]}</div>
        </div>
    );
};

export default NumberButton;