import React from 'react';
import './Button.css';

function MathFuntionButton(props) {
    return (
   
    <div className="allButtons">  
    <button className={props.buttonStyle}>{props.text}</button>
    </div>
    );
}

export default MathFunctionButton;