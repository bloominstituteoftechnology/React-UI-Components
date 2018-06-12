import React from 'react';
import './Display.css';

let displayValue = 0;

const CalculatorDisplay = () => {
	return (
		<div className='calc-display'>
			{displayValue}
		</div>
	);
};

export default CalculatorDisplay;