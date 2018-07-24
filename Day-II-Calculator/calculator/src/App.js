import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {display:'', firstNumber: null, operator: null};
	}

	checkLength = () => {
		if (this.state.display.length <= 8) {
			document.querySelector('.result p').style.fontSize = '48px';
		}
		if (this.state.display.length > 8) {
			document.querySelector('.result p').style.fontSize = '24px';
		}
		if (this.state.display.length > 16) {
			document.querySelector('.result p').style.fontSize = '12px';
		}
	}

	changeDisplay = (number) => {
		if (number === '.'){
			if (this.state.display.toString().indexOf('.') === -1){
				let newTotal = this.state.display;
				newTotal += number;
				this.setState({ display: newTotal });
				this.checkLength();
			}
		} else {
			let newTotal = this.state.display;
			newTotal += number;
			this.setState({ display: newTotal });
			this.checkLength();
		}
	}

	resetDisplay = () => {
		this.setState(()=> ({
			display: '',
			firstNumber: null,
			operator: null
		}));
	}

	solveMath = () => {
		if (this.state.operator !== null){
			let firstNum = Number(this.state.firstNumber);
			let secondNum = Number(this.state.display.split(this.state.operator)[1]);
			if (this.state.operator === "*"){
				let result = firstNum * secondNum;
				this.setState({display: result, firstNumber: result, operator: null});
			} else if (this.state.operator === "/"){
				let result = firstNum / secondNum;
				this.setState({ display: result, firstNumber: result, operator: null });
			} else if (this.state.operator === "+"){
				let result = firstNum + secondNum;
				this.setState({ display: result, firstNumber: result, operator: null });
			} else if (this.state.operator === "-"){
				let result = firstNum - secondNum;
				this.setState({ display: result, firstNumber: result, operator: null });
			}
		}
		this.checkLength();
	}

	storeOperator = (operator) => {
		if (this.state.operator == null){
			this.setState((prevState) => ({
				operator: operator, 
				firstNumber: Number(this.state.display), 
				display: prevState.display + operator
			}));
		}
		this.checkLength();
	}

	render() {
		return (
			<div className="container">
				<CalculatorDisplay result={this.state.display} />

				<ActionButton text="clear" buttonStyle="large white" onClick={this.resetDisplay} />
				<OperatorButton text="/" buttonStyle="small red" onClick={this.storeOperator} />

				<NumberButton text="7" buttonStyle="small white" onClick={this.changeDisplay} />
				<NumberButton text="8" buttonStyle="small white" onClick={this.changeDisplay} />
				<NumberButton text="9" buttonStyle="small white" onClick={this.changeDisplay} />
				<OperatorButton text="*" buttonStyle="small red" onClick={this.storeOperator} />

				<NumberButton text="4" buttonStyle="small white" onClick={this.changeDisplay} />
				<NumberButton text="5" buttonStyle="small white" onClick={this.changeDisplay} />
				<NumberButton text="6" buttonStyle="small white" onClick={this.changeDisplay} />
				<OperatorButton text="-" buttonStyle="small red" onClick={this.storeOperator} />

				<NumberButton text="1" buttonStyle="small white" onClick={this.changeDisplay} />
				<NumberButton text="2" buttonStyle="small white" onClick={this.changeDisplay} />
				<NumberButton text="3" buttonStyle="small white" onClick={this.changeDisplay} />
				<OperatorButton text="+" buttonStyle="small red" onClick={this.storeOperator} />

				<NumberButton text="0" buttonStyle="medium white" onClick={this.changeDisplay} />
				<NumberButton text="." buttonStyle="small white" onClick={this.changeDisplay} />
				<ActionButton text="=" buttonStyle="small red" onClick={this.solveMath} />
			</div>
		);
	}
};

export default App;
