import React from 'react';
import './Button.css';


function OperatorButton (){
    return(
        <div className="calculator__buttons--operator">
            <div className="calculator__button--operator">+</div>
            <div className="calculator__button--operator">-</div>
            <div className="calculator__button--operator">×</div>
            <div className="calculator__button--operator">÷</div>
            <div className="calculator__button--operator">=</div>
        </div>
    );
}

export default OperatorButton;