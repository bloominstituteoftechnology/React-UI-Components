import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
	<button className={props.buttonStyle}>{props.text}</button>
  )};

const DisplayNumberButton = (props) => {
	return (
		<div>
			<div>
				<NumberButton buttonStyle="numberButton" text="7" />
				<NumberButton buttonStyle="numberButton" text="8" />
				<NumberButton buttonStyle="numberButton" text="9" />
			</div>
			<div>
				<NumberButton buttonStyle="numberButton" text="6" />
				<NumberButton buttonStyle="numberButton" text="5" />
				<NumberButton buttonStyle="numberButton" text="4" />
			</div>
			<div>
				<NumberButton buttonStyle="numberButton" text="3" />
				<NumberButton buttonStyle="numberButton" text="2" />
				<NumberButton buttonStyle="numberButton" text="1" />
			</div>
		</div>
	)
};

export default DisplayNumberButton;
