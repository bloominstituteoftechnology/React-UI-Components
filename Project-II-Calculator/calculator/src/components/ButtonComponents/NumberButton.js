import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";

const NumberButton = props => {
  return (
    <div className="btns">
      <div className="numberBtns">
        <div onClick={props.handleClear} className="bigNumber">
          <button>clear</button>
        </div>
        <div className="numbersContainer">
          <div className="row">
            <button className="number" onClick={props.handleChange} value={7}>
              7
            </button>
            <button className="number" onClick={props.handleChange} value={8}>
              8
            </button>
            <button className="number" onClick={props.handleChange} value={9}>
              9
            </button>
          </div>
          <div className="row">
            <button className="number" onClick={props.handleChange} value={4}>
              4
            </button>
            <button className="number" onClick={props.handleChange} value={5}>
              5
            </button>
            <button className="number" onClick={props.handleChange} value={6}>
              6
            </button>
          </div>
          <div className="row">
            <button className="number" onClick={props.handleChange} value={1}>
              1
            </button>
            <button className="number" onClick={props.handleChange} value={2}>
              2
            </button>
            <button className="number" onClick={props.handleChange} value={3}>
              3
            </button>
          </div>
        </div>
        <div className="bigNumber">
          <button onClick={props.handleChange} value={0}>
            0
          </button>
        </div>
      </div>
      <ActionButton
        handleChange={props.handleChange}
        handleClear={props.handleClear}
        state={props.state}
        calculate={props.calculate}
      />
    </div>
  );
};

export default NumberButton;
