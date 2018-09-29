import React from 'react';
import './Button.css';

const ActionButton = props => {
	return (
		<button className={props.btnStyle}>{props.input}</button>
	)
};

ActionButton.defaultProps = {
	input: 'Input'

};

export default ActionButton;