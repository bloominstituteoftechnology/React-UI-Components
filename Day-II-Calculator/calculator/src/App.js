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


const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay CalculatorDisplay={display} buttonStyle = "display"/>
      <ActionButton ActionButton={clear} buttonStyle="clearBtn"/>
      <NumberButton NumberButton={divide} buttonStyle="operatorBtn"/>
      <NumberButton NumberButton={seven} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={eight} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={nine} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={multiply} buttonStyle="operatorBtn"/>
      <NumberButton NumberButton={four} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={five} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={six} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={minus} buttonStyle="operatorBtn"/>
      <NumberButton NumberButton={one} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={two} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={three} buttonStyle="numberBtn"/>
      <NumberButton NumberButton={add} buttonStyle="operatorBtn"/>
      <ActionButton ActionButton={zero} buttonStyle="zeroBtn"/>
      <NumberButton NumberButton={equals} buttonStyle="operatorBtn"/>
    </div>
  );
};

export default App;


