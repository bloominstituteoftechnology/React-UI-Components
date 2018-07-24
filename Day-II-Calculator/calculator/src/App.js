import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="wrap">
    <CalculatorDisplay />
      <div><ActionButton text="clear" /><NumberButton text="&#247;" /></div>
      <div> 
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="&#215;" />
      </div>
      <div>
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text="&#8722;" />
      </div>
      <div>
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="&#43;" />
      </div>
      <div>
        <ActionButton text="0" /><NumberButton text="=" />
      </div>
     
      
    </div>
  );
};

export default App;
