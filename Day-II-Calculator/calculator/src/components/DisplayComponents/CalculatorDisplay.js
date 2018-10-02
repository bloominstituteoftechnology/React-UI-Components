import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="display">
        
            <div className="displayNum">
            {props.text}
            </div>

            <div className="op-row">
                    <div className="div op">÷</div>
                    <div className="mult op">x</div>
                    <div className="min op">−</div>
                    <div className="plus op">+</div>
             </div>
        
        </div>
    );
}

export default CalculatorDisplay;

/* ÷x−+ */