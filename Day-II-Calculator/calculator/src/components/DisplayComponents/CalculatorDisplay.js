import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
 return (
     <p className={props.numberStyle}>
     {props.number}
     </p>
 );
};

export default CalculatorDisplay;