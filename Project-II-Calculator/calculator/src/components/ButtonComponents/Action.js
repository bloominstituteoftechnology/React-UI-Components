import React from "react";
import ActionButton from "./ActionButton";
import "./Button.css";
const actionObj = [
  { display: "0", style: "action-button" },
  { display: "Clear", style: "action-button" }
];
function Action() {
  return (
    <div className="action-wrapper">
      {actionObj.map(function(actions, index) {
        return <ActionButton indexProp={index} actionProps={actions} />;
      })}
    </div>
  );
}
export default Action;
