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
  text: "&divide"
}

const multiply = {
  text: "&times"
}

const minus = {
  text: "-"
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
      <CalculatorDisplay CalculatorDisplay={display} />
      <ActionButton ActionButton={clear} />
      <NumberButton NumberButton={divide} />
      <NumberButton NumberButton={seven} />
      <NumberButton NumberButton={eight} />
      <NumberButton NumberButton={nine} />
      <NumberButton NumberButton={multiply} />
      <NumberButton NumberButton={four} />
      <NumberButton NumberButton={five} />
      <NumberButton NumberButton={six} />
      <NumberButton NumberButton={minus} />
      <NumberButton NumberButton={one} />
      <NumberButton NumberButton={two} />
      <NumberButton NumberButton={three} />
      <NumberButton NumberButton={add} />
      <ActionButton ActionButton={zero}/>
      <NumberButton NumberButton={equals} />
    </div>
  );
};

export default App;

