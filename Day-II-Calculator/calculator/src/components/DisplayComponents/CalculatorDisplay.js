import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
	return <div className={props.displayArea}>{props.number}</div>;
};

const DisplayCalculatorDisplay = props => {
	return (
		<div>
			<CalculatorDisplay displayArea="blackDisplay" number="0" />
		</div>
	);
};

export default DisplayCalculatorDisplay;
