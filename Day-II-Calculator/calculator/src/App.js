import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import Display from './components/DisplayComponents/CalculatorDisplay.js'
const App = () => {
  return (
	  <div className = "container">
      	<div className = "row-1">
        	<Display />
      	</div>
      <div className = "row-2">
        <ActionButton displayStyle="action" text="clear" />
        <NumberButton displayStyle="operator"  text="&#247;"/>
      </div>
      <div className = "row-3">
        <NumberButton displayStyle="number" text="7" />
        <NumberButton displayStyle="number" text="8" />
		<NumberButton displayStyle="number" text="9" />
        <NumberButton displayStyle="operator" text="&#215;" />
      </div>
      <div className = "row-4">
        <NumberButton displayStyle="number" text="4" />
		<NumberButton displayStyle="number" text="5" />
		<NumberButton displayStyle="number" text="6" />
		<NumberButton displayStyle="operator" text="-" />
      </div>
      <div className = "row-5">
        <NumberButton displayStyle="number" text="1" />
		<NumberButton displayStyle="number" text="2" />
		<NumberButton displayStyle="number" text="3" />
        <NumberButton displayStyle="operator" text="+" />
      </div>
      <div className = "row-6">
        <ActionButton displayStyle="action" text="0" />
        <NumberButton displayStyle="operator" text="=" />
      </div>
    </div>
  );
};

export default App;






//    <div>
//      <h3>Welcome to React Calculator</h3>
//      <p>
//        We have given you a starter project. You'll want to build out your
//        components in their respective files, remove this code and replace it
//        with the proper components.
//      </p>
//      <p>
//        <strong>
//          Don't forget to `default export` your components and import them here
//          inside of this file in order to make them work.
//        </strong>
//      </p>
//    </div>