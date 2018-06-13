import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
	return (
	   <div className="display">
	   	<p className="zero-display">{props.name}</p>
	   </div>
	)
}



export default CalculatorDisplay;
