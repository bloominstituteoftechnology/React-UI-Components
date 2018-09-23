import React from 'react';
import './Button.css';

const ActionButton = (props) => {
	return(
        <div className={`largeButton ${props.customStyle}`}>{props.text}</div>

     );
}

export default ActionButton;
