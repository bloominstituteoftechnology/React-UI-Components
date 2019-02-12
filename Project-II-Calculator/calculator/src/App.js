import React from 'react';
import './App.css';
import CalculatorLayout from './components/CalculatorLayout/CalculatorLayout';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const actionArray = ['clear', 0];
const operatorsArray = ["÷", "x", "-", "+", "="];


const App = () => {
  return (
    <CalculatorLayout num={numArray} actions={actionArray} operators={operatorsArray} />
  );
};

export default App;
