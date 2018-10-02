import React from "react";
import "./App.css";

import NumberButton from "./components/ButtonComponents/NumberButton.js";
import ActionButton from "./components/ButtonComponents/ActionButton.js";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";

const numberButtons = [
  { key: "1", text: "/", style: "operator" },
  { key: "2", text: "7", style: "number" },
  { key: "3", text: "8", style: "number" },
  { key: "4", text: "9", style: "number" },
  { key: "5", text: "X", style: "operator" },
  { key: "6", text: "4", style: "number" },
  { key: "7", text: "5", style: "number" },
  { key: "8", text: "6", style: "number" },
  { key: "9", text: "-", style: "operator" },
  { key: "10", text: "1", style: "number" },
  { key: "11", text: "2", style: "number" },
  { key: "12", text: "3", style: "number" },
  { key: "13", text: "+", style: "operator" }
];
const App = () => {
  return (
    <div className="appContainer">
      <CalculatorDisplay />
      <div className="numberButtonDiv">
        <ActionButton
          actionClickHandler={actionClickHandler}
          text="clear"
          buttonStyle="clear"
        />

        {numberButtons.map(number => {
          return (
            <NumberButton
              numberClickHandler={numberClickHandler}
              key={number.key}
              text={number.text}
              buttonStyle={number.style}
            />
          );
        })}
        <ActionButton
          actionClickHandler={actionClickHandler}
          text="0"
          buttonStyle="zero"
        />
        <ActionButton
          actionClickHandler={actionClickHandler}
          text="="
          buttonStyle="equals"
        />
      </div>
    </div>
  );
};

function actionClickHandler(text) {
  if (text === "clear") {
    clear(true);
  }
  if (text === "0") {
    zero();
  }
  if (text === "=") {
    equals();
  }
}
let string = "";
let stringTemp = "";
let counter = 0;
function numberClickHandler(text) {
  if (parseInt(text) < 10) {
    console.log(stringBuilder(text));
  } else {
    console.log(text);
    if (text === "/") {
      divide(string);
    }
    if (text === "X") {
      multiply(string);
    }
    if (text === "-") {
      subtract(string);
    }
    if (text === "+") {
      add(string);
    }
  }
}

// function updateDisplay(text) {
//   return (
//     <div>hello</div>
//   );
// }

function stringBuilder(text) {
  string += text;
  return string;
}

function divide(string) {
  if (counter === 0) {
    stringTemp = "1";
  }
  console.log(
    `${stringTemp} divided by ${string} is ${parseInt(stringTemp) / parseInt(string)}`
  );
  stringTemp = string;
  console.log(stringTemp);
  clear(false);
  counter++;
}
function multiply(string, stringTemp) {}
function subtract(string, stringTemp) {}
function add(string, stringTemp) {}

function clear(clear) {
  string = "";
  if (clear) {
    console.log("cleared");
    counter = 0;
  }
}

function zero() {}

function equals() {}

export default App;
