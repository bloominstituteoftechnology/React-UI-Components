import React from "react";
import "./App.css";
import Display from "./components/DisplayComponents/CalculatorDisplay";
import WhiteButtons from "./components/ButtonComponents/NumberButton";
import RedButtons from "./components/ButtonComponents/ActionButton";

const funcs = ["÷", "x", "-", "+", "="];
const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: "0",
      postOp: false,
      storedVal: null,
      storedOp: null
    };
  }

  clear() {
    let disp = this.state.displayVal;
    if (this.state.postOp) {
      this.setState({ displayVal: "confirm clear" });
    }
    if (!this.state.postOp || disp === "confirm clear") {
      this.setState({
        displayVal: "0",
        postOp: false,
        postEqual: false,
        storedVal: null,
        storedOp: null
      });
    }
  }

  numInput(num) {
    let disp = this.state.displayVal;
    if (disp.length > 11) {
      this.setState({ displayVal: "it done broke" });
      return;
    }
    if (disp === "0" || disp === this.state.storedVal || this.state.postEqual || disp === "confirm clear") {
      this.setState({ displayVal: String(num), postEqual:false});
    } else {
      this.setState({ displayVal: disp + num });
    }
  }

  opInput(func) {
    let disp = this.state.displayVal;

    if (func === "÷") {
      this.setState({
        postOp: true,
        storedVal: disp,
        storedOp: func
      });
    }
    if (func === "x") {
      this.setState({
        postOp: true,
        storedVal: disp,
        storedOp: func
      });
    }
    if (func === "-") {
      this.setState({
        postOp: true,
        storedVal: disp,
        storedOp: func
      });
    }
    if (func === "+") {
      this.setState({
        postOp: true,
        storedVal: disp,
        storedOp: func
      });
    }
    if (func === "=") {
      let stored = this.state.storedVal;
      let op = this.state.storedOp;
      let result;
      if (op === "÷") {
        result = parseFloat(stored) / parseFloat(disp);
        result = result.toFixed(2);
      }
      if (op === "+") {
        result = parseFloat(stored) + parseFloat(disp);
      }
      if (op === "-"){
        result = parseFloat(stored) - parseFloat(disp);
      }
      if (op === "x"){
        result = parseFloat(stored) * parseFloat(disp);
      }
      
      this.setState({
        displayVal: result,
        postOp: false,
        postEqual: true,
        storedVal: null,
        storedOp: null
      });
    }
  }

  render() {
    return (
      <div className="cal-container">
        <Display value={this.state.displayVal} />
        <div className="btn-container">
          <div className="white-btns">
            <div className="btn zero" onClick={() => this.numInput(0)}>
              0
            </div>
            {ints.map(num => {
              return (
                <WhiteButtons
                  number={num}
                  key={num}
                  clickHandler={() => this.numInput(num)}
                />
              );
            })}

            <div className="btn clear" onClick={() => this.clear()}>
              clear
            </div>
          </div>
          <div className="red-btns">
            {funcs.map(func => (
              <RedButtons
                func={func}
                key={func}
                clickHandler={() => this.opInput(func)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
