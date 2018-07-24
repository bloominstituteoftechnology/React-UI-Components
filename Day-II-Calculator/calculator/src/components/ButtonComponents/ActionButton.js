import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="action-buttons">
            <button className="calulator-key key-divide">÷</button>
            <button className="calulator-key key-multiply">×</button>
            <button className="calulator-key key-subtract">-</button>
            <button className="calulator-key key-add">+</button>
            <button className="calulator-key key-equals">=</button>
        </div>
    )
};

export default ActionButton;