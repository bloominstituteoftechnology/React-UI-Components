import React from "react";
import "./App.css";
import Display from "./components/DisplayComponents/DisplayContainer";
import Button from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="calc-wrapper">
      <Display />
      <Button />
    </div>
  );
};

export default App;
