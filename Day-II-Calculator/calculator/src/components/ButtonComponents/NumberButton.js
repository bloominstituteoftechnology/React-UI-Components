import React from 'react';
import './Button.css';


const NumberButton = (props) => {
	return (
		<input
		type="button"
		className={props.type === 'action' ? 'button action-button' : 'button input-button'}
		onClick={props.handleClick}
		value={props.label}
  />

	);
}

 
export default NumberButton;