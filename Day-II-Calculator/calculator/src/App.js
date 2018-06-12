import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton'


const App = () => {
  return (
    <div className="container">
    	<CalculatorDisplay name="0"/>
    	<NumberButton text="1"/>
    	<NumberButton text="2"/>
    	<NumberButton text="3"/>
    	<NumberButton text="4"/>
    	<NumberButton text="5"/>
    	<NumberButton text="6"/>
    	<NumberButton text="7"/>
    	<NumberButton text="8"/>
    	<NumberButton text="9"/>
    	<NumberButton text="="/>
    	<NumberButton text="+"/>
    	<NumberButton text="-"/>
    	<NumberButton text="X"/>
    	<NumberButton text="0"/>
    	<ActionButton text="clear"/>
    </div>
  );
};

export default App;
