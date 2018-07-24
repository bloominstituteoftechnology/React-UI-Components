import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="action-buttons">
            <button className="calculator-key key-divide">÷</button>
            <button className="calculator-key key-multiply">×</button>
            <button className="calculator-key key-subtract">-</button>
            <button className="calculator-key key-add">+</button>
            <button className="calculator-key key-equals">=</button>
        </div>
    )
};

export default ActionButton;