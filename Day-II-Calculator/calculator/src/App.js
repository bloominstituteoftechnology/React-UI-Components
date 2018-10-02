import React from "react";
import "./App.css";
import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

// const clear = {
//   text: "clear",
//   buttonStyle: "action-btn"
// };

const App = () => {
  return (
    <div className="calc-container">
      <CalcDisplay />
      <ActionButton buttonStyle="action-btn" text="clear" />
      <NumberButton buttonStyle="operator" text="&divide;" />
      <NumberButton buttonStyle="num-btn" text="1" />
      <NumberButton buttonStyle="num-btn" text="2" />
      <NumberButton buttonStyle="num-btn" text="3" />
      <NumberButton buttonStyle="operator" text="&times;" />
      <NumberButton buttonStyle="num-btn" text="4" />
      <NumberButton buttonStyle="num-btn" text="5" />
      <NumberButton buttonStyle="num-btn" text="6" />
      <NumberButton buttonStyle="operator" text="&minus;" />
      <NumberButton buttonStyle="num-btn" text="7" />
      <NumberButton buttonStyle="num-btn" text="8" />
      <NumberButton buttonStyle="num-btn" text="9" />
      <NumberButton buttonStyle="operator" text="+" />
      <ActionButton buttonStyle="action-btn" text="0" />
      <NumberButton buttonStyle="operator" text="=" />
    </div>
  );
};

/* <h3>Welcome to React Calculator</h3>
<p>
  We have given you a starter project. You'll want to build out your
  components in their respective files, remove this code and replace it
  with the proper components.
</p>
<p>
  <strong>
    Don't forget to `default export` your components and import them here
    inside of this file in order to make them work.
  </strong>
</p> */
export default App;
