import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberCollection = () => {
return (
<div className="floweyTheFlower">
	<NumberButton number="clear" name="large"/>
	<NumberButton number="9"/>
	<NumberButton number="8"/>
	<NumberButton number="7"/>
	<NumberButton number="6"/>
	<NumberButton number="5"/>
	<NumberButton number="4"/>
	<NumberButton number="3"/>
	<NumberButton number="2"/>
	<NumberButton number="1"/>
	<NumberButton number="0" name="large"/>
</div>
	);
};


export default NumberCollection;