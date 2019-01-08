import React from 'react';
import './Button.css';

function MathFunctionButton(props) {
    return (

    <button className={props.buttonStyle}>{props.text}</button>
   
    );
}

export default MathFunctionButton;