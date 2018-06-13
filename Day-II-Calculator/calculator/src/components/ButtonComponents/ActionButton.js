import React from 'react';
import './Button.css';

const ActionButton = props => {
	return (
	  <button className={`default-button ${props.buttonStyles}`}>
	  {props.text}
	  </button>
	)
};
	ActionButton.defaultProps = {
		buttonStyles: 'action-button'
	};


export default ActionButton;

