import React from "react";
import "./Button.css";

const ActionButtons = props => {
  return (
    <div className="actButtons">
      <button className={`actionButtonStyles ${props.ActionButtonSyle}`}>
        {props.buttonSymbol}
      </button>
      ;
    </div>
  );
};

ActionButtons.defaultProps = {
  ActionButtonStyle: "teal",
  buttonSymbol: "x"
};

export default ActionButtons;
