import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        <div className="number-buttons">
            <button className="calulator-key key-0">0</button>
            <button className="calulator-key key-1">1</button>
            <button className="calulator-key key-2">2</button>
            <button className="calulator-key key-3">3</button>
            <button className="calulator-key key-4">4</button>
            <button className="calulator-key key-5">5</button>
            <button className="calulator-key key-6">6</button>
            <button className="calulator-key key-7">7</button>
            <button className="calulator-key key-8">8</button>
            <button className="calulator-key key-9">9</button>
        </div>
    )
};

export default NumberButton;