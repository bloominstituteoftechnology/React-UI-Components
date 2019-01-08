import React from 'react';
import './Button.css';

const ActionButton = () => {
    const action = ['÷', 'x', '-', '+', '=']
    return (
        <div className='actionContainer'>
            {
                action.map(e => {
                    return <p className='calculatorBtn calculatorBtn--action'>{e}</p>
                })
            }
        </div>
    )
};

export default ActionButton;