import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
	return (
	   <div className="display">
	   	<p>{props.value}</p>
	   </div>
	)
}



export default CalculatorDisplay;
