import React from 'react';
import './Display.css';

const CalculatorDisplay=props=>{

    return <input type="text"  className="display" placeholder={props.text} disabled='true'/>;
}


export default CalculatorDisplay



