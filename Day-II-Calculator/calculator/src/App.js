import React from 'react';
import './App.css';
import Keypad from './components/ButtonComponents/Keypad';
import Display from './components/DisplayComponents/CalculatorDisplay';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expression : '',
      value : 0,
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.returnValue = this.returnValue.bind(this);
  }

  handleNumber = (e) => {
    if (this.state.value !== 0 && !isNaN(this.state.expression.slice(-1))) {
        this.setState((prevState => ({
          value : prevState.value + "" + e,
          expression : prevState.expression += e
        })));
    } else {
      this.setState((prevState) => ({ 
        value : e, 
        expression : prevState.expression += e
      }));
    };
  };

  handleClear = () => {
    this.setState({ 
      value : 0, 
      expression : '',
      currentTotal: 0
    });
  };

  handleDivide = () => {
    if (!isNaN(this.state.expression.slice(-1))) {
      this.setState((prevState) => ({
        expression : prevState.expression += "/"
      }));
    };
  };

  handleMultiply = () => {
    if (!isNaN(this.state.expression.slice(-1))) {
      this.setState((prevState) => ({
        expression : prevState.expression += "*"
      }));
    };
  };

  handleSubtract = () => {
    if (!isNaN(this.state.expression.slice(-1))) {
      this.setState((prevState) => ({
        expression : prevState.expression += "-"
      }));
    };
  };

  handleAdd = () => {
    if (!isNaN(this.state.expression.slice(-1))) {
      this.setState((prevState) => ({
        expression : prevState.expression += "+"
      }));
    };
  };

  returnValue = () => {
    if (this.state.expression) {
      console.log(this.state.expression)
      this.setState({ 
        value : eval(this.state.expression)
      });
    };
  };

  render() {
    return (
      <div className="app-container">
        <Display value={this.state.value} />
        <Keypad 
          handleNumber={this.handleNumber}
          handleClear={this.handleClear}
          handleDivide={this.handleDivide}
          handleMultiply={this.handleMultiply}
          handleSubtract={this.handleSubtract}
          handleAdd={this.handleAdd}
          returnValue={this.returnValue}
        />
      </div>
    );
  };
};

