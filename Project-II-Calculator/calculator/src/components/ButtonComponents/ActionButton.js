import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className="symbols">
      <div className="row">
        <button className="number" onClick={props.handleChange} value="/">
          ÷
        </button>
      </div>
      <div className="row">
        <button className="number" onClick={props.handleChange} value="*">
          x
        </button>
      </div>
      <div className="row">
        <button className="number" onClick={props.handleChange} value="-">
          -
        </button>
      </div>
      <div className="row">
        <button className="number" onClick={props.handleChange} value="+">
          +
        </button>
      </div>

      <div className="row">
        <button className="number" onClick={props.calculate} value="=">
          =
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
