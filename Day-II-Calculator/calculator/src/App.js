import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 0,
      num1: "",
      operator: "",
      num2: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const innerText = e.target.innerText;
    const operatorArray = ["÷", "×", "−", "+"];

    if (innerText === "clear") {
      // if clear btn pressed, reset everything in state back to default
      this.setState({ 
        display: 0,
        num1: "",
        operator: "",
        num2: "",
      });
    } else if ((Number(innerText) || innerText === "0") && !this.state.operator) {
      // if num is pressed, and no operator was pressed, concat to num1 in state
      this.setState((prevState) => ({ 
        display: (this.state.display ? this.state.display : "") + innerText,
        num1: prevState.num1.concat(innerText), 
      }));
    } else if ((Number(innerText) || innerText === "0") && this.state.operator) {
      // if num is pressed, and an operator was pressed, concat to num2 in state
      this.setState((prevState) => ({ 
        display: (this.state.display ? this.state.display : "") + innerText,
        num2: prevState.num2.concat(innerText), 
      }));
    } else if (operatorArray.includes(innerText)) {
      // if button pressed is an operator, make that value the operator in state
      this.setState((prevState) => ({ 
        display: innerText,
        operator: innerText,
      }));
    } else if (innerText === "=") {
      // if equal sign is pressed, calculate the result
      let result;

      if (this.state.operator === "÷") {
        result = Number(this.state.num1) / Number(this.state.num2);
      }

      if (this.state.operator === "×") {
        result = Number(this.state.num1) * Number(this.state.num2);
      }

      if (this.state.operator === "−") {
        result = Number(this.state.num1) - Number(this.state.num2);
      }

      if (this.state.operator === "+") {
        result = Number(this.state.num1) + Number(this.state.num2);
      }

      // convert result into a string
      result = ("" + result);

      this.setState({ 
        display: result,
        num1: result,
        operator: "",
        num2: "",
      });
    }
  }

  render() {
    return (
      <div className="app">
        <CalculatorDisplay display={ this.state.display } />

        <ActionButton onClick={this.handleClick} buttonStyle="clear-btn" text="clear" />
        
        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="&divide;" />
        
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="7" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="8" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="9" />

        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="&times;" />

        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="4" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="5" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="6" />

        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="&minus;" />

        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="1" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="2" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="3" />

        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="&#x2b;" />

        <ActionButton onClick={this.handleClick} buttonStyle="zero-btn" text="0" />
        
        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="&#x3d;" />
      </div>
    );
  }
}

export default App;
