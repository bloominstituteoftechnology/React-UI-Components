import React from 'react';
import './App.css';
import DisplayNumberButton from './components/ButtonComponents/NumberButton';
import DisplayActionButtons from './components/ButtonComponents/ActionButton';
import DisplayCalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
	return (
		<div>
			<div class="calculatorContainer">
				<div>
					<DisplayCalculatorDisplay />
				</div>
				<div>
					<DisplayNumberButton />
				</div>
				<DisplayActionButtons />
				<div />
			</div>
		</div>
	);
};

export default App;
