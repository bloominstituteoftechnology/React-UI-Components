import React from 'react';
import './App.css';

import Display from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const CalDisplay = {
  text: 0,
  buttonStyle: "displaybar"
};
const Clear = {
  text: "clear",
  buttonStyle: "action"
};

const One = {
  text: 1,
  buttonStyle: "digit"
};
const Two = {
  text: 2,
  buttonStyle: "digit"
};
const Three = {
  text: 3,
  buttonStyle: "digit"
};
const Four = {
  text: 4,
  buttonStyle: "digit"
};
const Five = {
  text: 5,
  buttonStyle: "digit"
};
const Six = {
  text: 6,
  buttonStyle: "digit"
};
const Seven = {
  text: 7,
  buttonStyle: "digit"
};
const Eight = {
  text: 8,
  buttonStyle: "digit"
};
const Nine = {
  text: 9,
  buttonStyle: "digit"
};
const Zero = {
  text: 0,
  buttonStyle: "digit"
};
const Add = {
  text: "+",
  buttonStyle: "action"
};
const Subtract = {
  text: "-",
  buttonStyle: "action"
};
const Multiply = {
  text: "x",
  buttonStyle: "action"
};
const Divide = {
  text: "/",
  buttonStyle: "action"
};
const Equals = {
  text: "=",
  buttonStyle: "action"
};

const App = () => {
  return (
    <div className ="App">
      <Display display={CalDisplay}/>
      <ActionButton action={Clear}/>
      <ActionButton action={Divide}/>
      <NumberButton number={Seven}/>
      <NumberButton number={Eight}/>
      <NumberButton number={Nine}/>
      <ActionButton action={Multiply}/>
      <NumberButton number={Four}/>
      <NumberButton number={Five}/>
      <NumberButton number={Six}/>
      <ActionButton action={Subtract}/>
      <NumberButton number={One}/>
      <NumberButton number={Two}/>
      <NumberButton number={Three}/>
      <ActionButton action={Add}/>
      <NumberButton number={Zero}/>
      <ActionButton action={Equals}/>

      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
    </div>
  );
};

export default App;
