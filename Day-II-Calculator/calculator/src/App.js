import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: "0",
			display: "",
		};
	}

	render() {
		return (
			<div className="appWrapper">
				<CalculatorDisplay style="display" text={ this.state.total } />
				<div className="buttonWrapper">
					<div className="whiteDiv">
						<ActionButton
							style="button__action--wide"
							action="clear"
						/>
						<NumberButton number="7" />
						<NumberButton number="8" />
						<NumberButton number="9" />
						<NumberButton number="4" />
						<NumberButton number="5" />
						<NumberButton number="6" />
						<NumberButton number="1" />
						<NumberButton number="2" />
						<NumberButton number="3" />
						<NumberButton number="0" style="button__number--wide" />
					</div>
					<div className="redDiv">
						<ActionButton style="button__action" action="÷" />
						<ActionButton style="button__action" action="x" />
						<ActionButton style="button__action" action="-" />
						<ActionButton style="button__action" action="+" />
						<ActionButton style="button__action" action="=" />
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

