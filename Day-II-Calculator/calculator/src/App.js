import React from "react";
import "./App.css";
import "./components/ButtonComponents/Button.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcTotal: 11111,
      expression: "2 * 2"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(e.currentTarget.innerHTML);
    if(e.currentTarget.innerHTML === "clear") {
      this.setState(
        {
          calcTotal: 0,
          expression: ""
        }
      );
    }

    if(e.currentTarget.innerHTML === "/") {
      this.setState(
        {
          expression: this.state.expression += " / "
        }
      );
      alert(this.state.expression);
    }

    if(e.currentTarget.innerHTML === "+") {
      this.setState(
        {
          expression: this.state.expression += " + "
        }
      );
      alert(this.state.expression);
    }

    if(e.currentTarget.innerHTML === "-") {
      this.setState(
        {
          expression: this.state.expression += " - "
        }
      );
      alert(this.state.expression);
    }

    if(e.currentTarget.innerHTML === "x") {
      this.setState(
        {
          expression: this.state.expression += " x "
        }
      );
      alert(this.state.expression);
    }

    if(e.currentTarget.innerHTML === "=") {
      this.setState(
        {
          expression: (eval(this.state.expression))
        }
      );
      alert(this.state.expression);
    }


  }
  render() {
  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <CalculatorDisplay num={this.state.expression}/>
          <div className="btn-wrapper">
            <ActionButton clickfn={this.handleClick} type="wide-btn" value="clear" />
            <ActionButton clickfn={this.handleClick} type="danger-btn divide-btn" value="/" />
          </div>

          <div className="btn-wrapper">
            <NumberButton clickfn={this.handleClick} type="num-btn" value="7" />
            <NumberButton clickfn={this.handleClick} type="num-btn" value="8" />
            <NumberButton clickfn={this.handleClick} type="num-btn" value="9" />
            <ActionButton clickfn={this.handleClick} type="danger-btn" value="x" />
          </div>

          <div className="btn-wrapper">
            <NumberButton clickfn={this.handleClick} type="num-btn" value="4" />
            <NumberButton clickfn={this.handleClick}type="num-btn" value="5" />
            <NumberButton clickfn={this.handleClick}type="num-btn" value="6" />
            <ActionButton clickfn={this.handleClick} type="danger-btn minus-btn" value="-" />
          </div>


          <div className="btn-wrapper">
            <NumberButton clickfn={this.handleClick} type="numbtn" value="1" />
            <NumberButton clickfn={this.handleClick} type="numbtn" value="2" />
            <NumberButton clickfn={this.handleClick} type="numbtn" value="3" />
            <ActionButton clickfn={this.handleClick} type="danger-btn" value="+" />
          </div>

          <div className="btn-wrapper">
            <NumberButton clickfn={this.handleClick} type="wide-btn num-btn" value="0" />
            <ActionButton clickfn={this.handleClick} type="danger-btn" value="=" />
          </div>

      </div>
    </div>
  );
}
};

export default App;
