import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const ops = ['÷', 'x', '-', '+', '='];

const App = () => {
	return (
	<div className='calculator'>
		<CalculatorDisplay />
		<div className='buttons'>
			<div className='white-buttons'>
				<ActionButton text='clear' />
				{numbers.map(num => <NumberButton text={num} />)}
				<ActionButton text='0' />
			</div>
			<div className='red-buttons'>
				{ops.map(op => <OperationButton text={op} />)}
			</div>
		</div>
	</div>
	);
};

export default App;
