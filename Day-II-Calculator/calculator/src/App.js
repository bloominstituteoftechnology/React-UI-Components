import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";


const App = () => {
  return (
    <div className="calculator" >
      <CalculatorDisplay />
      <NumberButton buttonStyle="three-btn" text="clear" />
      <ActionButton buttonStyle="func-btn" text=" / " />
      <NumberButton buttonStyle="num-btn" text="7" />
      <NumberButton buttonStyle="num-btn" text="8" />
      <NumberButton buttonStyle="num-btn" text="9" />
      <ActionButton buttonStyle="func-btn" text=" X " />
      <NumberButton buttonStyle="num-btn" text="4" />
      <NumberButton buttonStyle="num-btn" text="5" />
      <NumberButton buttonStyle="num-btn" text="6" />
      <ActionButton buttonStyle="func-btn" text=" - " />
      <NumberButton buttonStyle="num-btn" text="1" />
      <NumberButton buttonStyle="num-btn" text="2" />
      <NumberButton buttonStyle="num-btn" text="3" />
      <ActionButton buttonStyle="func-btn" text=" + " />
      <NumberButton buttonStyle="three-btn" text="0" />
      <ActionButton buttonStyle="func-btn" text=" = " />      
    </div>






    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
  );
};

export default App;
