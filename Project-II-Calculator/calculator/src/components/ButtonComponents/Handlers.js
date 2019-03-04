import React, { Component } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

 class Handlers extends Component {
  state = { name: "name", count: 0, func: "+" };

   addHandler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      name: prevState.name + "!"
    }));
  };

   subtractHandler = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

   calcHandler = e => {
    e.persist();
    switch (this.state.func) {
      case "+":
        this.setState(prevState => ({
          count: prevState.count + parseInt(e.target.value)
        }));
        return;
      case "-":
        this.setState(prevState => ({
          count: prevState.count - parseInt(e.target.value)
        }));
        return;
      case "*":
        this.setState(prevState => ({
          count: prevState.count * parseInt(e.target.value)
        }));
        return;
      case "/":
        this.setState(prevState => ({
          count: prevState.count / parseInt(e.target.value)
        }));
        return;
      default:
        return;
    }
  };
  funcHandler = e => {
    const newFunc = e.target.value;
    this.setState({ func: newFunc });
  };

   render() {
    const { name, count, func } = this.state;
    return (
      <React.Fragment>
        <CalculatorDisplay count={count} />
        <button className='bigButton' onClick={this.calcHandler} value="0">
            clear
          </button>
          <button className='actionButton' onClick={this.funcHandler} value="/">
          ÷
          </button>
        <NumberButton clickHandler={this.calcHandler}  value={7} />
        <NumberButton clickHandler={this.calcHandler}  value={8} />
        <NumberButton clickHandler={this.calcHandler}  value={9} />
          <button className='actionButton' onClick={this.funcHandler} value="*">
          ×
          </button>
        <NumberButton clickHandler={this.calcHandler} value={4} />
        <NumberButton clickHandler={this.calcHandler} value={5} />
        <NumberButton clickHandler={this.calcHandler} value={6} />
          <button className='actionButton' onClick={this.funcHandler} value="-">
            -
          </button>
        <NumberButton clickHandler={this.calcHandler} value={1} />
        <NumberButton clickHandler={this.calcHandler} value={2} />
        <NumberButton clickHandler={this.calcHandler} value={3} />
          <button className='actionButton' onClick={this.funcHandler} value="+">
            +
          </button>
          <button className='bigButton' onClick={this.funcHandler} value="+">
            0
          </button>
        <button className='actionButton' onClick={this.funcHandler} value="=">
          =
          </button>
      </React.Fragment>
    );
  }
}


 export default Handlers;