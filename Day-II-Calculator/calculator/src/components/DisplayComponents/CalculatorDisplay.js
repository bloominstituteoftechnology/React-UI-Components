import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="display">
        
            <div className="displayNum">
            {props.text}
            </div>

            <div className="op-row">
                <div className="disOps">
                    <div className={`${props.active === 'div'? 'active' : null} op`}>÷</div>
                    <div className={`${props.active === 'mult'? 'active' : null} op`}>x</div>
                    <div className={`${props.active === 'min'? 'active' : null} op`}>−</div>
                    <div className={`${props.active === 'plus'? 'active' : null} op`}>+</div>
                </div>

                <div className="operand-display">
                    {props.operandOne !== '' ? props.operandOne : null}

                </div>


             </div>
        
        </div>
    );
}

export default CalculatorDisplay;

/* ÷x−+ */