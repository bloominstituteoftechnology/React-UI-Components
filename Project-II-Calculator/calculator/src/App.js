import React, { Component } from "react";
import { CalculatorDisplay } from "./components/DisplayComponents";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  render() {
    return (
      <div className="container">
        <div className="calculator__container">
          <CalculatorDisplay />
        </div>
      </div>
    );
  }
}

export default App;
