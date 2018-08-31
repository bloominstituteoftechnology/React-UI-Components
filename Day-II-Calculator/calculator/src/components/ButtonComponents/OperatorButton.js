import React from 'react';
import './Button.css';

const OperatorButton = () => {
    return (
        <div className="operators">
            <div className="operator division">/</div>
            <div className="operator multiplication">x</div>
            <div className="operator subtraction">-</div>
            <div className="operator addition">+</div>
            <div className="operator equal">=</div>
        </div>
    )
}

export default OperatorButton;