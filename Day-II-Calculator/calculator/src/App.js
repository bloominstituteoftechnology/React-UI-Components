import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
      <div className="calculator">
        <CalculatorDisplay />
        <ActionButton 
          buttonFor="clear" 
          buttonClass="button button-clear"
          blocks="3"
        />
        <ActionButton 
          buttonFor="/" 
          buttonClass="button button-/"
        />
        <NumberButton 
          buttonFor="7"
          buttonClass="button button-7" 
        />
        <NumberButton 
          buttonFor="8" 
          buttonClass="button button-8" 
        />
        <NumberButton 
          buttonFor="9" 
          buttonClass="button button-9" 
        />
        <ActionButton 
          buttonFor="*"
          buttonClass="button button-*"  
        />
        <NumberButton 
          buttonFor="4" 
          buttonClass="button button-4" 
        />
        <NumberButton 
          buttonFor="5" 
          buttonClass="button button-5" 
        />
        <NumberButton 
          buttonFor="6" 
          buttonClass="button button-6" 
        />
        <ActionButton 
          buttonFor="-" 
          buttonClass="button button--" 
        />
        <NumberButton 
          buttonFor="1" 
          buttonClass="button button-1" 
        />
        <NumberButton 
          buttonFor="2" 
          buttonClass="button button-2" 
        />
        <NumberButton 
          buttonFor="3" 
          buttonClass="button button-3" 
        />
        <ActionButton 
          buttonFor="+" 
          buttonClass="button button-+" 
        />
        <NumberButton 
          buttonFor="0" 
          buttonClass="button button-0"
          blocks="3"
        />
        <ActionButton 
          buttonFor="=" 
          buttonClass="button button-=" 
        />
      </div>
    );
};

export default App;
