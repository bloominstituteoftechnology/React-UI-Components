import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className = "calculator-container">
      <div className = "display">
        <CalculatorDisplay />
      </div>  
      <div className = "calculator-buttons">
        <div className = "buttons">
          <ActionButton buttonstyle = {"clear"} text = {'clear'} />
          <ActionButton buttonStyle = {'action'} text ={'/'} /> 
        </div>  
        <div className = "buttons">
          <NumberButton buttonStyle = {'number'} text ={'7'} />
          <NumberButton buttonStyle = {'number'} text ={'8'} />
          <NumberButton buttonStyle = {'number'} text ={'9'} />
          <ActionButton buttonStyle = {'action'} text ={'*'} />
        </div>
        <div className = "buttons">
          <NumberButton buttonStyle = {'number'} text ={'4'} />
          <NumberButton buttonStyle = {'number'} text ={'5'} />
          <NumberButton buttonStyle = {'number'} text ={'6'} />
          <ActionButton buttonStyle = {'action'} text ={'-'} />
        </div>
        <div className = "buttons">
          <NumberButton buttonStyle = {'number'} text ={'1'} />
          <NumberButton buttonStyle = {'number'} text ={'2'} />
          <NumberButton buttonStyle = {'number'} text ={'3'} />
          <ActionButton buttonStyle = {'action'} text ={'+'} />
        </div>
        <div className = "buttons">
          <NumberButton buttonStyle = {'zero-button'} text ={'0'} />
          <ActionButton buttonStyle = {'action'} text ={'='} />
        </div>
       
      </div>

      
    </div>  
  );
};

export default App;
