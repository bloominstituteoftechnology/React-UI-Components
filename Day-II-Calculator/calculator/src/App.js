import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton.js"

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3]

const App = () => {
  return (
    <div className = "numberContainer">
      {number.map(number => {
        return(
          <NumberButton display = {number} />
        )
        })}

    </div>
  );
};

export default App;
