import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton.js';
import NumberButton from '../ButtonComponents/NumberButton.js'

const CalculatorDisplay = props => {
	return (
		<div className= "mainDisplay">
			<div className = "firstRow">
				<p className = "display">0</p>
			</div>
		    <div className="secondRow">
		      <ActionButton text="clear" extraStyles = "big"/>
		      <ActionButton text= "&divide;" extraStyles ="action"/>
			</div>

	    	<div className ="thirdRow">
		      <NumberButton text="7"/>
		      <NumberButton text="8"/>
		      <NumberButton text="9"/>
		      <ActionButton text= "&times;" extraStyles ="action"/>

	      	</div>

	      	<div className ="fourthRow">
		      <NumberButton text="4"/>
		      <NumberButton text="5"/>
		      <NumberButton text="6"/>
		      <ActionButton text= "&minus;" extraStyles ="action"/>
	      	</div>

	      	<div className ="fifthRow">
		      <NumberButton text="1"/>
		      <NumberButton text="2"/>
		      <NumberButton text="3"/>
		      <ActionButton text= "&#43;" extraStyles ="action"/>
	      	</div>

	      	<div className ="sixthRow">
		      <NumberButton text="0" extraStyles ="big"/>
		      <ActionButton text= "&#61;" extraStyles ="action"/>
	      	</div>
	    </div>

	)
};

export default CalculatorDisplay;
