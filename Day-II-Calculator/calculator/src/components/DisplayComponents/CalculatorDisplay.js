import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = () => {
	return (
		<div className="calculator-container">
			<div className="output-display">
				<h1 className="output">0</h1>
			</div>
			<div className="btn-container">
				<ActionButton btnStyle="btn2 white-btn operator" input="clear"/>
				<ActionButton btnStyle="btn1 red-btn operator" input="÷"/>
			</div>
			<div className="btn-container">
				<NumberButton btnStyle="btn1 white-btn number" text="7"/>
				<NumberButton btnStyle="btn1 white-btn number" text="8"/>
				<NumberButton btnStyle="btn1 white-btn number" text="9"/>
				<ActionButton btnStyle="btn1 red-btn operator" input="x"/>
			</div>
			<div className="btn-container">
				<NumberButton btnStyle="btn1 white-btn number" text="4"/>
				<NumberButton btnStyle="btn1 white-btn number" text="5"/>
				<NumberButton btnStyle="btn1 white-btn number" text="6"/>
				<ActionButton btnStyle="btn1 red-btn operator" input="-"/>
			</div>
			<div className="btn-container">
				<NumberButton btnStyle="btn1 white-btn number" text="1"/>
				<NumberButton btnStyle="btn1 white-btn number" text="2"/>
				<NumberButton btnStyle="btn1 white-btn number" text="3"/>
				<ActionButton btnStyle="btn1 red-btn operator" input="+"/>
			</div>
			<div className="btn-container">
				<NumberButton btnStyle="btn2 white-btn number" text="0"/>
				<ActionButton btnStyle="btn1 red-btn operator" input="="/>
			</div>

		</div>

	)
};

export default CalculatorDisplay;