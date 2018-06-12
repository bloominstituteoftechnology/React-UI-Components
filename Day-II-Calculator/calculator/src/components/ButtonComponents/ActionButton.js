import React from 'react';
import './Button.css';

const ActionButton = (props)=> {
		return (
			<div className={props.customClass} >
				{props.label}
			</div>
		);
};

export default ActionButton;