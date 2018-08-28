import React from "react";
import "./App.css";
import "./components/ButtonComponents/Button.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
const App = () => {
  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <CalculatorDisplay />
          <div className="btn-wrapper">
            <ActionButton type="wide-btn" value="clear" />
            <ActionButton type="danger-btn" value="/" />
          </div>

          <div className="btn-wrapper">
            <NumberButton type="num-btn" value="7" />
            <NumberButton type="num-btn" value="8" />
            <NumberButton type="num-btn" value="9" />
            <ActionButton type="danger-btn" value="X" />
          </div>

          <div className="btn-wrapper">
            <NumberButton type="num-btn" value="4" />
            <NumberButton type="num-btn" value="5" />
            <NumberButton type="num-btn" value="6" />
            <ActionButton type="danger-btn" value="-" />
          </div>


          <div className="btn-wrapper">
            <NumberButton type="numbtn" value="1" />
            <NumberButton type="numbtn" value="2" />
            <NumberButton type="numbtn" value="3" />
            <ActionButton type="danger-btn" value="+" />
          </div>

          <div className="btn-wrapper">
            <NumberButton type="wide-btn num-btn" value="0" />
            <ActionButton type="danger-btn" value="=" />
          </div>

      </div>
    </div>
  );
};

export default App;
