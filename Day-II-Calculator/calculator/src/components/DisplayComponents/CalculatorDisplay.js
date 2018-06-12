import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
	return (
	   <div className="display">
	   	<p>{props.name}</p>
	   </div>
	)
}



export default CalculatorDisplay;
