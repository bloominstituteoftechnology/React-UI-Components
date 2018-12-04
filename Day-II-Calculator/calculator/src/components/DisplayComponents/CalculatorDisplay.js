import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
	return (
		<div className="cal-display">
			<h1 className="all-numbers">{props.number}</h1>
		</div>
	);
};

export default CalculatorDisplay;
