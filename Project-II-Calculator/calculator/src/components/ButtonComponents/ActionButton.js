import React, { Component } from "react";
import "./Button.css";

class ActionButton extends Component {
  render() {
    return (
      <div
        className={this.props.btnClass}
        onClick={() => this.props.operator(this.props.action)}
      >
        <span>{this.props.action}</span>
      </div>
    );
  }
}

export default ActionButton;
