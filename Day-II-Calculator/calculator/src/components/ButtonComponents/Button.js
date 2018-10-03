import React from "react";
import "./Button.css";


class Button extends React.Component {
  render() {
    const className = [
      "singleButton",
      this.props.red ? "red" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;