import React from 'react';
import CalculatorLayout from './components/CalculatorLayout/CalculatorLayout';



const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const actionBtn = [0, "clear"];
const calcOperators = ["÷", "x", "-", "+", "="];

const App = () => {
  return (
    <CalculatorLayout nums={numArray} actions={actionBtn} operators={calcOperators} />
  );
};

export default App;
