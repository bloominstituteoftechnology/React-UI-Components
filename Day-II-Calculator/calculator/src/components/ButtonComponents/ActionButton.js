import React from "react";
import "./Button.css";
import Button from "./Button.js";

class ActionButton extends React.Component {
  render() {
    return (
      <div class="buttonPanelAction">
        <Button name="÷" red />
        <Button name="x" red />
        <Button name="-" red />
        <Button name="+" red />
        <Button name="=" red />
      </div>
    );
  }
}

export default ActionButton;
