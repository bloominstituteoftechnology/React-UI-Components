import React, { Component } from "react";
import "./Button.css";

class ActionButton extends Component {
  render() {
    return (
      <div className={this.props.btnClass}>
        <span>{this.props.action}</span>
      </div>
    );
  }
}

export default ActionButton;
