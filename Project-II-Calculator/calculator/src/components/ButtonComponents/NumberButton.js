import React, { Component } from "react";
import "./Button.css";

class NumberButton extends Component {
  render() {
    return (
      <div
        className={this.props.btnClass}
        onClick={() => this.props.click(this.props.number)}
      >
        <span>{this.props.number}</span>
      </div>
    );
  }
}

export default NumberButton;
