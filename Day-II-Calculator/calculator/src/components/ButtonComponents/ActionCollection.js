import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const ActionCollection = () => {
return (
<div className="frisk">
	<ActionButton text="/"/>
	<ActionButton text="x"/>
	<ActionButton text="-"/>
	<ActionButton text="+"/>
	<ActionButton text="="/>
</div>
	);
};


export default ActionCollection;