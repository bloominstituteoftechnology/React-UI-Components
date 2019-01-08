import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className = "top">
      <CalculatorDisplay/>
      <div className= "numbers">
        <NumberButton text= "clear" type = "large"/>
        <NumberButton text="7" type="small" />
        <NumberButton text="8" type="small" />
        <NumberButton text="9" type="small" />
        <NumberButton text="4" type="small" />
        <NumberButton text="5" type="small" />
        <NumberButton text="6" type="small" />
        <NumberButton text="1" type="small" />
        <NumberButton text="2" type="small" />
        <NumberButton text="3" type="small" />
        <NumberButton text="0" type="large" />
      </div>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
