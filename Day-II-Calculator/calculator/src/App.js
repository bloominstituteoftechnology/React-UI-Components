import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton.js"

const number = 1

const App = () => {
  return (
    <div className = "numberContainer">
      <NumberButton display = {number} />

    </div>
  );
};

export default App;
