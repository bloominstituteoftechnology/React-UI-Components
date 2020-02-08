import React, { useState } from "react";
import "./App.css";
import SmallButton from "./components/ButtonComponents/SmallButton";
import BigButton from "./components/ButtonComponents/BigButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  // const [button, setButton] = useState(0);

  return (
    <div className="app">
      <CalculatorDisplay />
      <div className="buttons">
        <div className="rowOne flex">
          <BigButton class="clear" name="" />
          <SmallButton />
        </div>
        <div className="rowTwo flex">
          <SmallButton />
          <SmallButton />
          <SmallButton />
          <SmallButton />
        </div>
        <div className="rowThree flex">
          <SmallButton />
          <SmallButton />
          <SmallButton />
          <SmallButton />
        </div>
        <div className="rowFour flex">
          <SmallButton />
          <SmallButton />
          <SmallButton />
          <SmallButton />
        </div>
        <div className="rowFive flex">
          <BigButton />
          <SmallButton />
        </div>
      </div>
    </div>
  );
};

export default App;
