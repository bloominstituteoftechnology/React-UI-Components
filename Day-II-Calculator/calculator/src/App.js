import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
const ops = ['/', '*', '-', '+', '='];

class App extends React.Component {
	constructor() { 
		super();
		this.state = {
			total: '0',
			num1: null,
			num2: null,
			operator: null
	}
}	
	clear = () => {
		this.setState({
			total: '0'
		});
	}

	selectNum = (num) => {
		const total = this.state.total;
		if (this.state.operator) {
			this.setState({
				num2: num,
				total: total+num
			})
		}	else {
			this.setState({
				num1: num,
				total: total.substring(1)+num,
			})
		}
	}

	selectOp = (op) => {
		// const {num1, num2, operator} = this.state;
		const total = this.state.total;
		if (!this.state.operator) {
			this.setState({
				operator: op,
				total: total+op
			})
		} else if (op === '=') {
			this.setState({
				total: eval(total)
			})
		} else if (this.state.operator, this.state.num1, this.state.num2) {
			this.setState({
				num1: total,
				num2: '',
				operator: op,
				total: total+op
			})
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
}

export default App;
