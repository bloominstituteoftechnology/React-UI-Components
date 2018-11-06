import React from 'react';
import './Button.css';


function OperatorButton (){
    return(
        <div className="calculator__buttons--operator">
            <div>+</div>
            <div>-</div>
            <div>X</div>
            <div>d</div>
            <div>=</div>
        </div>
    );
}

export default OperatorButton;