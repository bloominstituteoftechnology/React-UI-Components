import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			rightNumber: "",
			operator: "",
			leftNumber: ""
		};
	}

	numberHandler(num) {
		let newNumber = this.state.rightNumber + num;
		if (newNumber.length <= 5) {
			this.setState({
				rightNumber: newNumber,
				total: newNumber
			});
		}
	}

	operatorHandler(op) {
		this.setState({
			operator: op,
			leftNumber: this.state.rightNumber,
			rightNumber: ""
		});
	}

	evaluateHandler() {
		let expression = this.calculate();
		this.setState({
			total: expression,
			leftNumber: expression,
			operator: "",
			rightNumber: ""
		});
	}

	clearHandler() {
		this.setState({
			total: 0,
			leftNumber: "",
			operator: "",
			rightNumber: ""
		});
	}

	calculate() {
		let returnValue;
		switch (this.state.operator) {
			case "*":
				returnValue =
					Number(this.state.leftNumber) *
					Number(this.state.rightNumber);
				break;
			case "+":
				returnValue =
					Number(this.state.leftNumber) +
					Number(this.state.rightNumber);
				break;
			case "/":
				returnValue =
					Number(this.state.leftNumber) /
					Number(this.state.rightNumber);
				break;
			case "-":
				returnValue =
					Number(this.state.leftNumber) -
					Number(this.state.rightNumber);
				break;
			default:
				break;
		}
		return returnValue;
	}
	render() {
		return (
			<div className="appWrapper">
				<CalculatorDisplay style="display" text={this.state.total} />
				<div className="buttonWrapper">
					<div className="whiteDiv">
						<ActionButton onClick={()=>this.clearHandler()}
							style="button__action--wide"
							action="clear"
						/>
						<NumberButton number="7" onClick={()=>this.numberHandler(7)} />
						<NumberButton number="8" onClick={()=>this.numberHandler(8)} />
						<NumberButton number="9" onClick={()=>this.numberHandler(9)} />
						<NumberButton number="4" onClick={()=>this.numberHandler(4)} />
						<NumberButton number="5" onClick={()=>this.numberHandler(5)} />
						<NumberButton number="6" onClick={()=>this.numberHandler(6)} />
						<NumberButton number="1" onClick={()=>this.numberHandler(1)} />
						<NumberButton number="2" onClick={()=>this.numberHandler(2)} />
						<NumberButton number="3" onClick={()=>this.numberHandler(3)} />
						<NumberButton number="0" style="button__number--wide" onClick={()=>this.numberHandler(0)}/>
					</div>
					<div className="redDiv">
						<ActionButton style="button__action" action="÷" onClick={()=>this.operatorHandler("/")}/>
						<ActionButton style="button__action" action="x" onClick={()=>this.operatorHandler("*")}/>
						<ActionButton style="button__action" action="-" onClick={()=>this.operatorHandler("-")}/>
						<ActionButton style="button__action" action="+" onClick={()=>this.operatorHandler("+")}/>
						<ActionButton style="button__action" action="=" onClick={()=>this.evaluateHandler()}/>
					</div>
				</div>
			</div>
		);
	}
}
export default App;

// const App = () => {
// 	return (
// 		<div className="appWrapper">
// 			<CalculatorDisplay style="display" text="555" />
// 			<div className="buttonWrapper">
// 				<div className="whiteDiv">
// 					<ActionButton style="button__action--wide" action="clear" />
// 					<NumberButton number="7" />
// 					<NumberButton number="8" />
// 					<NumberButton number="9" />
// 					<NumberButton number="4" />
// 					<NumberButton number="5" />
// 					<NumberButton number="6" />
// 					<NumberButton number="1" />
// 					<NumberButton number="2" />
// 					<NumberButton number="3" />
// 					<NumberButton number="0" style="button__number--wide" />
// 				</div>
// 				<div className="redDiv">
// 					<ActionButton style="button__action"action="÷" />
// 					<ActionButton style="button__action"action="x" />
// 					<ActionButton style="button__action"action="-" />
// 					<ActionButton style="button__action"action="+" />
// 					<ActionButton style="button__action"action="=" />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
