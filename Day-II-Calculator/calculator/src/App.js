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
    console.log(Number(innerText));

    const operatorArray = ["÷", "×", "−", "+"];
    console.log(innerText)

    // if (e.target.innerText === "clear") {
    //   this.setState({ display: 0});
    // } else {
    //   this.setState({ display: innerText });
    // }

    if (innerText === "clear") {
      this.setState({ 
        display: 0,
        num1: "",
        operator: "",
        num2: "",
      });
    } else if ((Number(innerText) || innerText === "0") && !this.state.operator) {
      this.setState((prevState) => ({ 
        display: (this.state.display ? this.state.display : "") + innerText,
        num1: prevState.num1.concat(innerText), 
      }));
    } else if ((Number(innerText) || innerText === "0") && this.state.operator) {
      this.setState((prevState) => ({ 
        display: (this.state.display ? this.state.display : "") + innerText,
        num2: prevState.num2.concat(innerText), 
      }));
    } else if (operatorArray.includes(innerText)) {
      this.setState((prevState) => ({ 
        display: innerText,
        operator: innerText,
      }));
    } else if (innerText === "=") {
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

      this.setState((prevState) => ({ 
        display: result,
        num1: ("" + result),
        operator: "",
        num2: "",
      }));
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
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
