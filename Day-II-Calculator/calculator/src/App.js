import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const ops = ['/', '*', '-', '+', '='];

class App extends React.Component {
	state = {
		total: 4,
		num1: 0,
		num2: 0,
		operator: null
	}
	
	clear = () => {
		this.setState({
			total: 0
		});
	}

	selectNum = (num) => {
		if (this.state.operator) {
			this.setState({
				num2: num
			})
		} else {
			this.setState({
				num1: num
			})
		}
	}

	selectOp = (op) => {
		const {num1, num2, operator} = this.state
		this.setState({
			operator: op
		})
		if (operator === '=') {
			this.setState({
				total: eval(`${num1} ${operator} ${num2}`)
		});
	}
}

	render() {
		return (
			<div className='calculator'>
				<CalculatorDisplay text={this.state.total} />
				<div className='buttons'>
					<div className='white-buttons'>
						<ActionButton text='clear' click={this.clear}/>
						{numbers.map((num, ind) => <NumberButton text={num} key={ind} click={this.selectNum} />)}
						<ActionButton text='0' />
					</div>
					<div className='red-buttons'>
						{ops.map((op, ind) => <OperationButton text={op} key={ind} click={this.selectOp} />)}
					</div>
				</div>
			</div>
		);
	}
	
};

export default App;
