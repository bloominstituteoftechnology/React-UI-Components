import React from "react";
import "./App.css";
import NumButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="container">
      <div className="display">
        <CalcDisplay label={0} />
      </div>
      <div className="numpad">
        <div className="numpad-row1 row">
          <ActionButton label="clear" buttonStyle="long" />
          <NumButton label="÷" buttonStyle="red"/>
        </div>
        <div className="numpad-row2 row">
          <NumButton label="7" buttonStyle="gray"/>
          <NumButton label="8" buttonStyle="gray"/>
          <NumButton label="9" buttonStyle="gray"/>
          <NumButton label="x" buttonStyle="red"/>
        </div>
        <div className="numpad-row3 row">
          <NumButton label="4" buttonStyle="gray"/>
          <NumButton label="5" buttonStyle="gray"/>
          <NumButton label="6" buttonStyle="gray"/>
          <NumButton label="-" buttonStyle="red"/>
        </div>
        <div className="numpad-row4 row">
          <NumButton label="1" buttonStyle="gray"/>
          <NumButton label="3" buttonStyle="gray"/>
          <NumButton label="2" buttonStyle="gray"/>
          <NumButton label="+" buttonStyle="red"/>
        </div>
        <div className="numpad-row5 row">
          <ActionButton label={0} buttonStyle="long" />
          <NumButton label="=" buttonStyle="red"/>
        </div>
      </div>
    </div>
  );
};

export default App;

// #### Day 2 MVP requirements

// - Create a `<NumberButton />` component that can accept `props` and display any number/symbol passed down as `text`.
//   - Example your component should be able to render a dynamic prop called text:
//   - Your button button should also be able to accept dynamic props `buttonStyle` for styling

// ```js
// <button className={props.buttonStyle}>{props.text}</button>
// ```

// - Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.
// - Create a `<CalculatorDisplay />` component that will be used as the `calculator display`
