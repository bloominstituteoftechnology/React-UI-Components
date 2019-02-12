import React from "react";
import "./App.css";

import NumberButton from "./components/ButtonComponents/NumberButton.js";
import ActionButton from "./components/ButtonComponents/ActionButton.js";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";

const numberButtons = [
  { key: "1", text: "/", style: "operator" },
  { key: "2", text: "7", style: "number" },
  { key: "3", text: "8", style: "number" },
  { key: "4", text: "9", style: "number" },
  { key: "5", text: "X", style: "operator" },
  { key: "6", text: "4", style: "number" },
  { key: "7", text: "5", style: "number" },
  { key: "8", text: "6", style: "number" },
  { key: "9", text: "-", style: "operator" },
  { key: "10", text: "1", style: "number" },
  { key: "11", text: "2", style: "number" },
  { key: "12", text: "3", style: "number" },
  { key: "13", text: "+", style: "operator" }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "0"
    };
  }
  numClick(e) {
    console.log("clicked");
  }
  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay text={this.state.display}/>
        <div className="numberButtonDiv">
          <ActionButton text="clear" buttonStyle="clear" />
          {numberButtons.map(button => {
            return (
              <NumberButton onClick={console.log('clikkk')}
                key={button.key}
                text={button.text}
                buttonStyle={button.style}
              />
            );
          })}
          ;
          <ActionButton text="0" buttonStyle="zero" />
          <ActionButton text="=" buttonStyle="equals" />
        </div>
      </div>
    );
  }

  updateDisplay(text){
    this.state.setState = {display: text};
  }
}

export default App;
