import React from 'react';
import './App.css';
import SquareButton from "./components/ButtonComponents/NumberButton";

//display calculator app
//data object holds values for all buttons
const data = {
  clear: "clear",
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  divide: "/",
  multiply: "*",
  substract: "-",
  add: "+",
  equals: "=", 
}
const App = () => {
  return (
    <SquareButton data={data} buttonStyle="square"/>
  );
};

export default App;
