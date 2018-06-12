import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (

    <div className = "container">  
      <CalculatorDisplay displayProp= "displayP"  text = "0" />

      <div className= "top">
      <ActionButton actionProp="clear" text = "clear" /> 
      <NumberButton buttonProp="divide" text = "&divide;" />
      </div>
      <div className="mTop">
      <NumberButton buttonProp= "buttonP" text = "7" />
      <NumberButton buttonProp= "buttonP" text = "8" />
      <NumberButton buttonProp= "buttonP" text = "9" />
      <NumberButton buttonProp= "mult" text = "&times;" />
      </div>
      <div className="mid">
      <NumberButton buttonProp= "buttonP" text = "4" />
      <NumberButton buttonProp= "buttonP" text = "5" />
      <NumberButton buttonProp= "buttonP" text = "6" />    
      <NumberButton buttonProp= "minus" text = "&minus;" />
      </div>
      <div className="mbot">
      <NumberButton buttonProp= "buttonP" text = "1" />    
      <NumberButton buttonProp= "buttonP" text = "2" />     
      <NumberButton buttonProp= "buttonP" text = "3" />
      <NumberButton buttonProp= "add" text = "+" />
      </div>
      <div className="bot">
      <ActionButton actionProp="zero" text = "0" />
      <NumberButton buttonProp= "equal" text = "=" />
      </div>
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
