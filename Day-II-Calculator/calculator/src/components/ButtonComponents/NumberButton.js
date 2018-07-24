import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        <div className="number-buttons">
            <button className="calculator-key key-0">0</button>
            <button className="calculator-key key-1">1</button>
            <button className="calculator-key key-2">2</button>
            <button className="calculator-key key-3">3</button>
            <button className="calculator-key key-4">4</button>
            <button className="calculator-key key-5">5</button>
            <button className="calculator-key key-6">6</button>
            <button className="calculator-key key-7">7</button>
            <button className="calculator-key key-8">8</button>
            <button className="calculator-key key-9">9</button>
        </div>
    )
};

export default NumberButton;