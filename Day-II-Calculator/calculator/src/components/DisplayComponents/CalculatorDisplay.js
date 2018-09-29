import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
	return (
		<div className="calculator-container">
			<div className="output-display">
				<NumberButton text="0"/>
			</div>
			<div className="clear-container">
				<ActionButton input="clear"/>
				<ActionButton input="÷"/>
			</div>
			<div className="7-container">
				<NumberButton text="7"/>
				<NumberButton text="8"/>
				<NumberButton text="9"/>
				<ActionButton input="x"/>
			</div>
			<div className="4-container">
				<NumberButton text="4"/>
				<NumberButton text="5"/>
				<NumberButton text="6"/>
				<ActionButton input="-"/>
			</div>
			<div className="1-container">
				<NumberButton text="1"/>
				<NumberButton text="2"/>
				<NumberButton text="3"/>
				<ActionButton input="+"/>
			</div>
			<div className="0-container">
				<NumberButton text="0"/>
				<ActionButton input="="/>
			</div>

		</div>

	)
};

export default CalculatorDisplay;