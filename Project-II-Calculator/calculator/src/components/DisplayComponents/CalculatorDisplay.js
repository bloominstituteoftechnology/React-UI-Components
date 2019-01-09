import React, { Component } from "react";
import "./Display.css";

class CalculatorDisplay extends Component {
  render() {
    return <div className="display">{this.props.display}</div>;
  }
}

export default CalculatorDisplay;
