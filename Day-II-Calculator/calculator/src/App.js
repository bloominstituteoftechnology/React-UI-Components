import React from "react";
import "./App.css";
import Display from "./components/DisplayComponents/DisplayContainer";
import Action from "./components/ButtonComponents/ActionButton";
import Button from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="calc-wrapper">
      <Display />
      <Action />
      <Button />
    </div>
  );
};

export default App;
