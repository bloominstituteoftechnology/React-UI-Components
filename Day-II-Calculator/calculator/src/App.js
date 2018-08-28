import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const zero = {
  text: "0"
};

const one =   {
  text: "1"
};

const two = {
  text: "2"
};

const three = {
  text: "3"

};

const four = {
  text: "4"
};

const five = {
  text: "5"
};

const six = {
  text: "6"
};

const seven = {
  text: "7"
};

const eight = {
  text: "8"
};

const nine = {
  text: "9"
};

const clear = {
  text: "clear"
};

const display = {
  text: "0"
}

const divide = {
  text: "\xF7"
}

const multiply = {
  text: "\xD7"
}

const minus = {
  text: "\u2013"
}

const add = {
  text: "+"
}

const equals = {
  text: "="
}


function App() {
  return (
    <div className="app">
      <CalculatorDisplay CalculatorDisplay={display} buttonStyle = "display"/>
      <ActionButton ActionButton={clear} buttonStyle="clear-button"/>
      <NumberButton NumberButton={divide} buttonStyle="operator"/>
      <NumberButton NumberButton={seven} buttonStyle="number"/>
      <NumberButton NumberButton={eight} buttonStyle="number"/>
      <NumberButton NumberButton={nine} buttonStyle="number"/>
      <NumberButton NumberButton={multiply} buttonStyle="operator"/>
      <NumberButton NumberButton={four} buttonStyle="number"/>
      <NumberButton NumberButton={five} buttonStyle="number"/>
      <NumberButton NumberButton={six} buttonStyle="number"/>
      <NumberButton NumberButton={minus} buttonStyle="operator"/>
      <NumberButton NumberButton={one} buttonStyle="number"/>
      <NumberButton NumberButton={two} buttonStyle="number"/>
      <NumberButton NumberButton={three} buttonStyle="number"/>
      <NumberButton NumberButton={add} buttonStyle="operator"/>
      <ActionButton ActionButton={zero} buttonStyle="zero-button"/>
      <NumberButton NumberButton={equals} buttonStyle="operator"/>
    </div>
  );
};

export default App;

