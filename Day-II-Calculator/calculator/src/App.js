import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const ops = ['÷', 'x', '-', '+', '='];

class App extends React.Component {
	state = {
		total: 4
	}
	
	clear = () => {
		this.setState({
			total: 0
		});
	}

	render() {
		return (
			<div className='calculator'>
				<CalculatorDisplay text={this.state.total} />
				<div className='buttons'>
					<div className='white-buttons'>
						<ActionButton text='clear' click={this.clear}/>
						{numbers.map((num, ind) => <NumberButton text={num} key={ind}/>)}
						<ActionButton text='0' />
					</div>
					<div className='red-buttons'>
						{ops.map((op, ind) => <OperationButton text={op} key={ind}/>)}
					</div>
				</div>
			</div>
		);
	}
	
};

export default App;
