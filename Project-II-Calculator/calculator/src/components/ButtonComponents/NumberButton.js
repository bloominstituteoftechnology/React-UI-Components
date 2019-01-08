import React, { Component } from "react";
import "./Button.css";

class NumberButton extends Component {
  render() {
    return (
      <div className={this.props.btnClass}>
        <span>{this.props.number}</span>
      </div>
    );
  }
}

export default NumberButton;
