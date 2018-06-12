import React from 'react';
import './Button.css';

const OperatorButton = () => {
    return (
        <div className = "operator-button-container">
                <div className = "division-operator"> / </div>
                <div className = "multiplication-operator"> * </div>
                <div className = "subtraction-operator"> - </div>
                <div className = "addition-operator"> + </div>
                <div className = "equals-operator"> = </div>
        </div>
    );
};

export default OperatorButton;