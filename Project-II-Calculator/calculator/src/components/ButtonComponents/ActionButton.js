import React from "react";
import "./Button.css";
const ActionButton = props => {
  return (
    <div className="something">
      <ActionButton />
      <ActionButton className="divide" text="" />
       <ActionButton className="multiply" text="" />
       <ActionButton className="subtract" text="-" />
       <ActionButton className="add" text="+" />
       <ActionButton className="equals" text="=" />
    </div>
  );
};

export default ActionButton;
