import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    const numbers = {
        numArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      };

    return (
        <div className="numberButtons">
            <div className="numbers">{numbers.numArray[1]}</div>
            <div className="numbers">{numbers.numArray[2]}</div>
            <div className="numbers">{numbers.numArray[3]}</div>
            <div className="numbers">{numbers.numArray[4]}</div>
            <div className="numbers">{numbers.numArray[5]}</div>
            <div className="numbers">{numbers.numArray[6]}</div>
            <div className="numbers">{numbers.numArray[7]}</div>
            <div className="numbers">{numbers.numArray[8]}</div>
            <div className="numbers">{numbers.numArray[9]}</div>
        </div>
    );
};

export default NumberButton;