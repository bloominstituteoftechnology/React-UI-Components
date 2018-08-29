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
      expression: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.currentTarget.innerHTML === "clear") {
      this.setState(
        {
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
    }

    if(e.currentTarget.innerHTML === "+") {
      this.setState(
        {
          expression: this.state.expression += " + "
        }
      );
    }

    if(e.currentTarget.innerHTML === "-") {
      this.setState(
        {
          expression: this.state.expression += " - "
        }
      );
    }

    if(e.currentTarget.innerHTML === "x") {
      this.setState(
        {
          expression: this.state.expression += " * "
        }
      );
    }

    if(e.currentTarget.innerHTML === "=") {
      this.setState(
        {
          expression: (Math.round(eval(this.state.expression) * 100000) / 100000)
        }
      );
    }

    // numbers 

    // 1
    if(e.currentTarget.innerHTML === "1") {
      this.setState(
        {
          expression: this.state.expression += "1"
        }
      );
    }

    // 2
    if(e.currentTarget.innerHTML === "2") {
      this.setState(
        {
          expression: this.state.expression += "2"
        }
      );
    }

    // 3
    if(e.currentTarget.innerHTML === "3") {
      this.setState(
        {
          expression: this.state.expression += "3"
        }
      );
    }

    // 4
    if(e.currentTarget.innerHTML === "4") {
      this.setState(
        {
          expression: this.state.expression += "4"
        }
      );
    }

    // 5
    if(e.currentTarget.innerHTML === "5") {
      this.setState(
        {
          expression: this.state.expression += "5"
        }
      );
    }

    // 6
    if(e.currentTarget.innerHTML === "6") {
      this.setState(
        {
          expression: this.state.expression += "6"
        }
      );
    }

    // 7
    if(e.currentTarget.innerHTML === "7") {
      this.setState(
        {
          expression: this.state.expression += "7"
        }
      );
    }

    // 8
    if(e.currentTarget.innerHTML === "8") {
      this.setState(
        {
          expression: this.state.expression += "8"
        }
      );
    }

    // 9
    if(e.currentTarget.innerHTML === "9") {
      this.setState(
        {
          expression: this.state.expression += "9"
        }
      );
    }

    // 0
    if(e.currentTarget.innerHTML === "0") {
      this.setState(
        {
          expression: this.state.expression += "0"
        }
      );
    }

        // .
        if(e.currentTarget.innerHTML === ".") {
          this.setState(
            {
              expression: this.state.expression += "."
            }
          );
        }
        console.log(this.state.expression);



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
            <NumberButton clickfn={this.handleClick} type="wide-btn zero num-btn" value="0" />
            <NumberButton clickfn={this.handleClick} type="num-btn" value="." />
            <ActionButton clickfn={this.handleClick} type="danger-btn" value="=" />
          </div>

      </div>
    </div>
  );
}
};

export default App;
