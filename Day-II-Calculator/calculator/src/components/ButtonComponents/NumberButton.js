import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    const numbers = {
        numArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      };

    return (
        <div className={props.displayStyle}>
            <div className="numbers">{props.text.numArray[1]}</div>
            <div className="numbers">{props.text.numArray[2]}</div>
            <div className="numbers">{props.text.numArray[3]}</div>
            <div className="numbers">{props.text.numArray[4]}</div>
            <div className="numbers">{props.text.numArray[5]}</div>
            <div className="numbers">{props.text.numArray[6]}</div>
            <div className="numbers">{props.text.numArray[7]}</div>
            <div className="numbers">{props.text.numArray[8]}</div>
            <div className="numbers">{props.text.numArray[9]}</div>
        </div>
    );
};

export default NumberButton;