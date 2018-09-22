import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) =>{
  return (
    <div className ={`calculator-display ${props.type}`}> {props.text} </div>
  )
}

export default CalculatorDisplay
