import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className = "calculator-container">
      <div>
        <CalculatorDisplay />
      </div>  
      <div className = "calculator-buttons">
        <div className = "white-buttons">
          <ActionButton buttonstyle = {"operator"} text = {'clear'} />
          <div className = "row-1-numbers">
            <NumberButton buttonStyle = {'number'} text ={'7'} />
            <NumberButton buttonStyle = {'number'} text ={'8'} />
            <NumberButton buttonStyle = {'number'} text ={'9'} />
          </div>
          <div className = "row-2-numbers">
            <NumberButton buttonStyle = {'number'} text ={'4'} />
            <NumberButton buttonStyle = {'number'} text ={'5'} />
            <NumberButton buttonStyle = {'number'} text ={'6'} />
          </div>
          <div className = "row-3-numbers">
            <NumberButton buttonStyle = {'number'} text ={'1'} />
            <NumberButton buttonStyle = {'number'} text ={'2'} />
            <NumberButton buttonStyle = {'number'} text ={'3'} />
          </div>
            <NumberButton buttonStyle = {'number'} text ={'0'} />
        </div>
        <div className ="red-buttons">
            <ActionButton buttonStyle = {'action'} text ={'/'} /> 
            <ActionButton buttonStyle = {'action'} text ={'*'} />
            <ActionButton buttonStyle = {'action'} text ={'-'} />
            <ActionButton buttonStyle = {'action'} text ={'+'} />
            <ActionButton buttonStyle = {'action'} text ={'='} />
        </div>
      </div>

      
    </div>  
  );
};

export default App;
