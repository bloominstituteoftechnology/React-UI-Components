import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {total:'0'};
	}

	changeDisplay() {
		this.setState((prevState)=> ({
			total: Number(prevState.total + '2').toString()
		}));
	}

	resetDisplay() {
		this.setState(()=> ({
			total: '0'
		}));
	}

	render() {
		return (
			<div className="container">
				<CalculatorDisplay result={this.state.total} />

				<ActionButton text="clear" buttonStyle="large white" onClick={this.resetDisplay.bind(this)} />
				<NumberButton text="&#247;" buttonStyle="small red" />

				<NumberButton text="7" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="8" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="9" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="&times;" buttonStyle="small red"/>

				<NumberButton text="4" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="5" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="6" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="&minus;" buttonStyle="small red" />

				<NumberButton text="1" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="2" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="3" buttonStyle="small white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="+" buttonStyle="small red" />

				<ActionButton text="0" buttonStyle="large white" onClick={this.changeDisplay.bind(this)} />
				<NumberButton text="=" buttonStyle="small red" />
			</div>
		);
	}
};

export default App;
