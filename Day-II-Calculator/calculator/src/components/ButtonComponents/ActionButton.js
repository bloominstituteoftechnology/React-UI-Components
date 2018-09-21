import React from 'react';
import './Button.css';
const ActionButtons = props => {
	return <button className={props.buttonStyle}>{props.text}</button>;
};

const DisplayActionButtons = props => {
	return <div>
			<ActionButtons buttonStyle="actionButton" text="÷" />
			<ActionButtons buttonStyle="actionButton" text="×" />
			<ActionButtons buttonStyle="actionButton" text="-" />
			<ActionButtons buttonStyle="actionButton" text="+" />
			<ActionButtons buttonStyle="actionButton" text="=" />
		</div>;
};
export default DisplayActionButtons;
