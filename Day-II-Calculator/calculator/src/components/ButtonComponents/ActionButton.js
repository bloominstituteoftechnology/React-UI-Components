import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className="action-buttons">
      <div className="clear">clear</div>
      <div className="numbers">
        <div className="number">7</div>
        <div className="number">8</div>
        <div className="number">9</div>
        <div className="number">4</div>
        <div className="number">5</div>
        <div className="number">6</div>
        <div
          className="number"
          onClick={e => props.setDisplay(e.target.textContent)}
        >
          1
        </div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>
      <div className="zero">0</div>
    </div>
  );
};

export default ActionButton;
